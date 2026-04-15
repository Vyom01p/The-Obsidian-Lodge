import { auth } from "../_lib/auth";
import {
  RectangleGroupIcon,
  MapIcon,
  SparklesIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Guest Area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);

  const facilities = [
    {
      title: "Glacial Spa & Wellness",
      desc: "Experience our heated infinity pool and Finnish sauna overlooking the peaks.",
      icon: <SparklesIcon className="h-6 w-6" />,
      time: "06:00 - 22:00",
    },
    {
      title: "The Iron Peak Gym",
      desc: "State-of-the-art strength and cardio equipment for high-altitude training.",
      icon: <RectangleGroupIcon className="h-6 w-6" />,
      time: "24/7 Access",
    },
    {
      title: "Obsidian Fine Dining",
      desc: "Locally sourced ingredients prepared by world-class chefs at our terrace restaurant.",
      icon: <BeakerIcon className="h-6 w-6" />,
      time: "Breakfast, Lunch, Dinner",
    },
    {
      title: "Guided Alpine Treks",
      desc: "Explore hidden glacial lakes and forest trails with our expert mountain guides.",
      icon: <MapIcon className="h-6 w-6" />,
      time: "Daily at 08:00",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="mb-10">
        <h2 className="font-light text-4xl text-primary-100 mb-2 tracking-tight">
          Welcome back,{" "}
          <span className="font-semibold italic text-accent-500 uppercase">
            {firstName}
          </span>
        </h2>
        <p className="text-primary-400 text-lg">
          Your sanctuary in the peaks is ready for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facilities.map((facility) => (
          <div
            key={facility.title}
            className="bg-primary-900/20 border border-primary-800 p-8 rounded-sm hover:border-accent-500/50 transition-all group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary-950 text-accent-500 border border-primary-800 rounded-full group-hover:bg-accent-500 group-hover:text-primary-950 transition-all">
                {facility.icon}
              </div>
              <h3 className="text-xl font-medium text-primary-100">
                {facility.title}
              </h3>
            </div>

            <p className="text-primary-300 leading-relaxed mb-6 text-sm">
              {facility.desc}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-primary-900">
              <span className="text-xs uppercase tracking-widest text-primary-500">
                Available
              </span>
              <span className="text-xs font-semibold text-accent-400">
                {facility.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
