import Image from "next/image";
import TextExpander from "../_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid grid-cols-[3fr_2fr] gap-0 border border-primary-800 bg-primary-950 items-stretch">
      {/* 1. IMAGE SECTION: Now takes more space and has a zoom effect */}
      <div className="relative h-full overflow-hidden">
        <Image
          src={image}
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
          alt={`Cabin ${name}`}
        />
      </div>

      {/* 2. CONTENT SECTION: Now uses an asymmetric overlapping style */}
      <div className="py-12 px-16 relative">
        {/* Large Background Text for Design Depth */}
        <span className="absolute top-0 right-4 text-[10rem] font-bold text-primary-900/30 leading-none select-none -z-0">
          {name.split(" ").at(-1)}
        </span>

        <div className="relative z-10">
          <h2 className="text-accent-500 font-extralight text-6xl mb-6 translate-x-[-80px] bg-primary-950 py-2 px-6 w-fit shadow-2xl border-l-4 border-accent-600">
            {name}
          </h2>

          <p className="text-lg text-primary-300 mb-10 leading-relaxed italic">
            <TextExpander>{description}</TextExpander>
          </p>

          {/* 3. ICON GRID: Now horizontal and professional */}
          <ul className="grid grid-cols-1 gap-y-4 mb-10">
            <li className="flex gap-4 items-center border-b border-primary-900 pb-3">
              <UsersIcon className="h-6 w-6 text-accent-500" />
              <span className="text-lg">
                For up to{" "}
                <span className="font-bold text-primary-100">
                  {maxCapacity}
                </span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-4 items-center border-b border-primary-900 pb-3">
              <MapPinIcon className="h-6 w-6 text-accent-500" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold text-primary-100">Dolomites</span>{" "}
                (Italy)
              </span>
            </li>
            <li className="flex gap-4 items-center border-b border-primary-900 pb-3">
              <EyeSlashIcon className="h-6 w-6 text-accent-500" />
              <span className="text-lg">
                Privacy <span className="font-bold text-primary-100">100%</span>{" "}
                guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cabin;
