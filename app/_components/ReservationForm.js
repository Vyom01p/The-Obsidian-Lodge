"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;

  const startDate = range?.from;
  const endDate = range?.to;
  const numNights =
    startDate && endDate ? differenceInDays(endDate, startDate) : 0;
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    cabinPrice,
    cabinId: id,
    numNights,
  };
  const createBookingWithData = createBooking.bind(null, bookingData);

  return (
    <div className="flex flex-col h-full">
      <div className="bg-primary-800/50 px-10 py-4 flex justify-between items-center border-b border-primary-800">
        <p className="text-primary-400 text-sm italic">Logged in as</p>
        <div className="flex gap-3 items-center">
          <img
            referrerPolicy="no-referrer"
            className="h-7 rounded-full border border-primary-700"
            src={user.image}
            alt={user.name}
          />
          <p className="text-primary-100 font-medium text-sm">{user.name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="py-10 px-10 flex flex-col flex-1"
      >
        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <label htmlFor="numGuests" className="text-primary-300 text-sm">
              How many guests?
            </label>
            <select
              name="numGuests"
              id="numGuests"
              className="px-4 py-3 bg-primary-950 border border-primary-800 text-primary-100 w-full rounded-sm focus:outline-none focus:border-accent-500 transition-colors"
              required
            >
              <option value="">Select number of guests...</option>
              {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
                <option value={x} key={x}>
                  {x} {x === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="observations" className="text-primary-300 text-sm">
              Special requirements?
            </label>
            <textarea
              name="observations"
              id="observations"
              className="px-4 py-3 bg-primary-950 border border-primary-800 text-primary-100 w-full rounded-sm h-32 resize-none focus:outline-none focus:border-accent-500 transition-colors"
              placeholder="Any pets, allergies, special requirements, etc.?"
            />
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-800 flex flex-col gap-4">
          {numNights > 0 && (
            <div className="flex justify-between items-end mb-2">
              <p className="text-primary-400 text-xs uppercase tracking-widest">
                Est. Total
              </p>
              <p className="text-3xl font-light text-primary-100">
                ${cabinPrice}
              </p>
            </div>
          )}

          {!(startDate && endDate) ? (
            <p className="text-primary-500 text-sm text-center italic">
              Please select dates to continue
            </p>
          ) : (
            <SubmitButton pendingLabel="Reserving Lodge...">
              Confirm Reservation
            </SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
