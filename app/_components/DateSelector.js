"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr?.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;
  const { regularPrice, discount } = cabin;

  const numNights =
    displayRange?.from && displayRange?.to
      ? differenceInDays(displayRange.to, displayRange.from)
      : 0;

  const cabinPrice = numNights * (regularPrice - discount);
  const { minBookingLength, maxBookingLength } = settings || {};

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        classNames={{
          months: "flex flex-col lg:flex-row gap-10 justify-center",
          head_cell: "text-primary-400 font-normal text-[0.8rem] pb-4",
          cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
          day: "h-10 w-10 p-0 font-normal aria-selected:opacity-100 hover:bg-primary-800 transition-all",
          day_selected: "bg-accent-500 text-primary-950 hover:bg-accent-600",
          day_today: "text-accent-500 font-bold underline underline-offset-4",
        }}
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          (bookedDates?.some((date) => isSameDay(date, curDate)) ?? false)
        }
      />

      <div className="flex items-center justify-between px-10 bg-primary-900/50 border-t border-primary-800 h-[80px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline text-primary-100">
            <span className="text-2xl font-light">
              ${regularPrice - discount}
            </span>
            {discount > 0 && (
              <span className="line-through text-primary-500 text-sm">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-400 text-sm">/night</span>
          </p>
        </div>

        {range?.from || range?.to ? (
          <button
            className="text-accent-500 border border-accent-500/30 py-2 px-6 text-sm hover:bg-accent-500 hover:text-primary-950 transition-all"
            onClick={resetRange}
          >
            Clear Selection
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
