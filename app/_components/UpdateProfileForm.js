"use client";

import Image from "next/image";
import { updateGuest } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ guest, children }) {
  const { fullName, email, nationalID, countryFlag } = guest;

  return (
    <form
      action={updateGuest}
      className="bg-primary-900/20 border border-primary-800 py-10 px-12 text-lg flex gap-8 flex-col shadow-2xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm uppercase tracking-widest text-primary-400 font-medium">
            Full name
          </label>
          <input
            disabled
            name="fullName"
            defaultValue={fullName}
            className="px-5 py-3 bg-primary-950/50 border border-primary-800 text-primary-500 w-full rounded-sm disabled:cursor-not-allowed italic"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm uppercase tracking-widest text-primary-400 font-medium">
            Email address
          </label>
          <input
            disabled
            name="email"
            defaultValue={email}
            className="px-5 py-3 bg-primary-950/50 border border-primary-800 text-primary-500 w-full rounded-sm disabled:cursor-not-allowed italic"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="nationality"
            className="text-sm uppercase tracking-widest text-primary-400 font-medium"
          >
            Nationality
          </label>
          <div className="relative h-5 w-8 opacity-80">
            <Image
              src={countryFlag || "/default-flag.jpg"}
              alt="Country flag"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="nationalID"
          className="text-sm uppercase tracking-widest text-primary-400 font-medium"
        >
          National ID / Passport Number
        </label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          placeholder="Enter document ID..."
          className="px-5 py-3 bg-primary-950 border border-primary-800 text-primary-100 w-full rounded-sm focus:border-accent-500 outline-none transition-all"
        />
      </div>

      <div className="flex justify-end items-center gap-6 pt-4">
        <SubmitButton pendingLabel="Updating Profile...">
          Save Changes
        </SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
