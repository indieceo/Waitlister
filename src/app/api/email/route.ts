import { LoopsClient, APIError, RateLimitExceededError } from "loops";
import { type NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

const loops = new LoopsClient(process.env.LOOPS_API_KEY || "");

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  //  2 requests per minute from the same IP address in the a sliding window of  1 minute duration which
  // means that the window slides forward every second and the rate limit is reset every minute for each IP address
  limiter: Ratelimit.slidingWindow(2, "1 m"),
});

export async function POST(request: NextRequest) {
  let ip: string;
  const xForwardedForHeader = request.headers.get("x-forwarded-for");

  if (xForwardedForHeader) {
    ip = xForwardedForHeader.split(",")[0].trim();
  } else {
    ip = request.headers.get("x-real-ip")?.trim() ?? "127.0.0.1";
  }

  const result = await ratelimit.limit(ip);

  if (!result.success) {
    return NextResponse.json({ error: "Too many requests!" }, { status: 429 });
  }

  const { email, name } = await request.json();

  try {
    const resp = await loops.createContact({
      email: email,
      properties: {
        firstName: name,
      },
    });

    if (!resp.success) {
      return NextResponse.json({ error: "Failed to add to waitlist" }, { status: 500 });
    }

    return NextResponse.json({ message: "Successfully added to waitlist" }, { status: 200 });
  } catch (error) {
    // Pass through Loops API errors directly
    if (error instanceof RateLimitExceededError) {
      return NextResponse.json({ error: error.message || "Rate limit exceeded" }, { status: 429 });
    }

    if (error instanceof APIError) {
      return NextResponse.json(
        { error: error.message || "An error occurred" },
        { status: error.statusCode || 500 },
      );
    }

    // Handle unknown errors
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || "An unexpected error occurred" },
        { status: 500 },
      );
    }

    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}