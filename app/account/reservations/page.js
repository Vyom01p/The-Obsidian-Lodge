import ReservationList from "../../_components/ReservationList";
import { auth } from "../../_lib/auth";
import { getBookings } from "../../_lib/data-service";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);

  return (
    <div>
      <h2 className="font-light text-4xl text-primary-100 mb-2 tracking-tight">
        Your{" "}
        <span className="font-semibold italic text-accent-500">journey</span>{" "}
        with the Lodge
      </h2>
      <p className="text-primary-400 mb-10 text-lg">
        A detailed history of your secluded escapes and upcoming mountain
        retreats.
      </p>

      {bookings.length === 0 ? (
        <p className="text-lg text-primary-300">
          You have no reservations yet. Explore our{" "}
          <a
            className="underline text-accent-500 hover:text-accent-400"
            href="/cabins"
          >
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
