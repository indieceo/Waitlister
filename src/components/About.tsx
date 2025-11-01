import { aboutDetails } from "@/config/about";
import { LuSparkles } from "react-icons/lu";

export default function About() {
  return (
    <section
      id={aboutDetails.sectionId}
      className="mx-auto flex min-h-screen w-[90vw] flex-col items-center pt-24 pb-36 md:w-[45rem] lg:w-[50rem]"
    >
      <div className="flex bg-card items-center gap-2 self-start rounded-full border px-3 py-2">
        <LuSparkles className="text-primary size-4" />
        <p className="text-muted-foreground text-xs font-medium">{aboutDetails.sectionLabel}</p>
      </div>

      <div className="mt-5 flex w-full flex-col items-center justify-center gap-5">
        <h1 className="text-foreground text-xl font-semibold md:text-2xl">
          {aboutDetails.description}
        </h1>

        <div className="grid h-auto w-full grid-cols-2 items-center gap-4 md:h-[6rem] md:grid-cols-4 md:gap-4">
          {aboutDetails.features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-card border-border flex h-full min-h-[8rem] w-full flex-col items-center justify-center gap-3 rounded-3xl border md:min-h-0"
              >
                <Icon className="size-6 text-primary" />
                <p className="text-muted-foreground text-sm font-semibold">{item.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 h-[30rem] max-h-[30rem] w-full">
          <video
            src={aboutDetails.videoSrc}
            key={aboutDetails.videoSrc}
            className="border-border h-full w-full rounded-3xl border-[10px] object-cover shadow-lg"
            loop
            autoPlay
            playsInline
            muted
            aria-label="About section video showing product demo"
          />
        </div>
      </div>
    </section>
  );
}
