import Reservation from "../../_components/Reservation";
import { getCabin, getCabins } from "../../_lib/data-service";
import { Suspense } from "react";
import Spinner from "../../_components/Spinner";
import Cabin from "../../_components/Cabin";

export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinid);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinid);

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <div className="flex flex-col gap-y-32">
        <section>
          <Cabin cabin={cabin} />
        </section>

        <section>
          <Suspense fallback={<Spinner />}>
            <Reservation cabin={cabin} />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
