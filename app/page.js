import Link from "next/link";
import bg from "../public/bg2.jpg";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={100}
        className="object-cover object-center"
        alt="Misty blue mountains and pine trees"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="mb-12 text-6xl font-extralight tracking-tighter text-primary-950 sm:text-7xl md:text-8xl lg:text-9xl opacity-90 drop-shadow-sm">
          Escape to the{" "}
          <span className="italic font-normal text-primary-900 underline underline-offset-[12px] decoration-accent-500/20">
            extraordinary.
          </span>
        </h1>

        <Link
          href="/cabins"
          className="bg-accent-500 px-12 py-6 text-primary-950 text-lg font-semibold hover:bg-accent-600 transition-all rounded-sm shadow-2xl"
        >
          Explore our luxury cabins
        </Link>
      </div>
    </main>
  );
}
