import Reservation from "../../_components/Reservation";
import { getCabin, getCabins } from "../../_lib/data-service";
import { Suspense } from "react";
import Spinner from "../../_components/Spinner";
import Cabin from "../../_components/Cabin";

export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  if (!cabin) return { title: "Cabin Not Found" };

  return { title: `Cabin ${cabin.name}` };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  return ids;
}

export default async function Page({ params }) {
  const { cabinId } = await params;
  const cabin = await getCabin(cabinId);

  if (!cabin)
    return <p className="text-center text-primary-200">Cabin not found.</p>;

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
