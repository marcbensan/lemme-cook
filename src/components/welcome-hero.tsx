"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { useRouter } from "next/navigation";

export function WelcomeHero() {
  const router = useRouter();
  const images = [
    "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
    "https://images.pexels.com/photos/29305882/pexels-photo-29305882/free-photo-of-delicious-vietnamese-pho-bo-with-fresh-herbs.jpeg",
    "https://images.pexels.com/photos/9106517/pexels-photo-9106517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1265626/pexels-photo-1265626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5129122/pexels-photo-5129122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4294500/pexels-photo-4294500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15529652/pexels-photo-15529652/free-photo-of-fettuccine-with-meatballs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5908004/pexels-photo-5908004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7440335/pexels-photo-7440335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/19362406/pexels-photo-19362406/free-photo-of-roasted-meat-with-vegetables-and-sauce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6448484/pexels-photo-6448484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3952043/pexels-photo-3952043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7601452/pexels-photo-7601452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7601398/pexels-photo-7601398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/19362408/pexels-photo-19362408/free-photo-of-meat-with-vegetables-served-in-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/28913737/pexels-photo-28913737/free-photo-of-cozy-comfort-homecooked-vegetable-soup-with-croutons.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/19523880/pexels-photo-19523880/free-photo-of-roasted-meat-with-rosemary.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7965918/pexels-photo-7965918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15060357/pexels-photo-15060357/free-photo-of-person-cutting-onions-on-wooden-chopping-board.jpeg",
    "https://images.pexels.com/photos/9814658/pexels-photo-9814658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/952356/pexels-photo-952356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6978905/pexels-photo-6978905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6281487/pexels-photo-6281487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5192414/pexels-photo-5192414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1352262/pexels-photo-1352262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1233101/pexels-photo-1233101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
        Leftovers? Nah.{" "}
        <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          LemmeCook
        </span>
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
        Discover creative recipes and make the most out of your ingredients.
        Join the LemmeCook community and turn your leftovers into a gourmet.
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          onClick={() => router.push("/signin")}
          className="rounded-md cursor-pointer bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
        >
          Sign In
        </button>
        <button
          onClick={() => router.push("/signup")}
          className="rounded-md cursor-pointer border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
        >
          Create an Account
        </button>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}
