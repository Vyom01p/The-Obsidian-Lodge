import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-4xl font-light text-center text-accent-400 tracking-tight">
        Secure your stay at{" "}
        <span className="font-semibold text-primary-100 italic">
          Obsidian {cabin.name.split(" ").at(-1)}
        </span>
        .
        <span className="block text-lg text-primary-400 mt-2 font-normal">
          No payment required until arrival.
        </span>
      </h2>

      <div className="grid grid-cols-[1.2fr_0.8fr] border border-primary-800 min-h-[500px] bg-primary-950 shadow-2xl">
        <DateSelector
          settings={settings}
          bookedDates={bookedDates}
          cabin={cabin}
        />
        <div className="bg-primary-900/20 p-0 flex flex-col border-l border-primary-800">
          {session?.user ? (
            <ReservationForm cabin={cabin} user={session.user} />
          ) : (
            <LoginMessage />
          )}
        </div>
      </div>
    </div>
  );
}

export default Reservation;
