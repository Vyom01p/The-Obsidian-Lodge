import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

// export const revalidate = 3600;
// export const revalidate = 15;
export const metadata = {
  title: "Cabins ",
};
export default function Page({ searchParams }) {
  console.log(searchParams);
  const filter = searchParams?.capacity ?? "all";
  // CHANGE
  return (
    <div>
      <h1 className="text-4xl mb-5  font-medium">Our Luxury Cabins</h1>
      <p className="text-primary-200 text-lg mb-10">
        Modern sanctuaries tucked away within the ancient, mist-shrouded forests
        of the Obsidian Peaks. Experience a world where deep-blue twilight meets
        the warmth of a crackling fire. Whether you’re navigating hidden forest
        trails or unwinding in a cedar hot tub beneath the vast mountain
        sky,this is your private refuge. Disconnect from the noise; rediscover
        the silence. Welcome to the Lodge.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
