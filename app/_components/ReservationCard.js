import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "../_components/DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    created_at,
    cabins: { name, image },
  } = booking;

  const past = isPast(new Date(startDate));

  return (
    <div className="flex border border-primary-800 bg-primary-900/10 group overflow-hidden">
      <div className="relative h-40 w-48 overflow-hidden">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className={`object-cover border-r border-primary-800 transition-all duration-700 group-hover:scale-110 ${past ? "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100" : ""}`}
        />
      </div>

      <div className="flex-grow px-8 py-5 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-light text-primary-100 italic">
            {numNights} nights in{" "}
            <span className="font-semibold text-accent-500 not-italic uppercase tracking-tighter">
              Lodge {name.split(" ").at(-1)}
            </span>
          </h3>

          <span
            className={`px-4 py-1 text-[10px] uppercase tracking-[0.2em] border ${past ? "border-primary-800 text-primary-500" : "border-accent-500/50 text-accent-500 shadow-[0_0_10px_rgba(185,148,106,0.1)]"}`}
          >
            {past ? "Past stay" : "Confirmed"}
          </span>
        </div>

        <p className="text-primary-300 font-medium">
          {format(new Date(startDate), "EEE, MMM dd yyyy")}
          <span className="mx-2 text-primary-600">&mdash;</span>
          {format(new Date(endDate), "EEE, MMM dd yyyy")}
          <span className="ml-3 text-xs text-primary-500 font-normal italic">
            (
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}
            )
          </span>
        </p>

        <div className="flex gap-6 mt-auto items-center">
          <p className="text-2xl font-light text-primary-100">${totalPrice}</p>
          <div className="h-4 w-[1px] bg-primary-800" />
          <p className="text-sm uppercase tracking-widest text-primary-400">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-[10px] uppercase tracking-widest text-primary-600">
            Reserved {format(new Date(created_at), "MMM dd, p")}
          </p>
        </div>
      </div>

      <div className="flex flex-col border-l border-primary-800 w-28">
        {!past ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group/btn flex flex-col items-center justify-center gap-1 border-b border-primary-800 flex-1 hover:bg-primary-800 transition-all"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-500 group-hover/btn:text-accent-500 transition-colors" />
              <span className="text-[10px] uppercase tracking-tighter text-primary-400">
                Edit
              </span>
            </Link>
            <DeleteReservation onDelete={onDelete} bookingId={id} />
          </>
        ) : (
          <div className="flex-1 bg-primary-950/20" />
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
