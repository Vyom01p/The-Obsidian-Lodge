import SelectCountry from "../../_components/SelectCountry";
import UpdateProfileForm from "../../_components/UpdateProfileForm";
import { auth } from "../../_lib/auth";
import { getGuest } from "../../_lib/data-service";

export const metadata = {
  title: "Update Profile",
};

export default async function Page() {
  const session = await auth();
  const guest = await getGuest(session.user.email);

  return (
    <div className="max-w-4xl">
      <h2 className="font-light text-4xl text-primary-100 mb-4 tracking-tight">
        Refine your{" "}
        <span className="font-semibold italic text-accent-500">
          guest profile
        </span>
      </h2>

      <p className="text-lg mb-10 text-primary-400">
        Ensuring your details are accurate allows for a seamless, prioritized
        check-in at the Lodge.
      </p>

      <UpdateProfileForm guest={guest}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-950 border border-primary-800 text-primary-100 w-full rounded-sm focus:border-accent-500 transition-all outline-none"
          defaultCountry={guest.nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
