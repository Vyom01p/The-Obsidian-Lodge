import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col border border-primary-800 bg-primary-900/40 backdrop-blur-sm overflow-hidden rounded-sm group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Details Section */}
      <div className="p-6 bg-primary-950/60">
        <h3 className="text-accent-500 font-semibold text-2xl mb-2">
          Cabin {name}
        </h3>

        <p className="text-primary-300 mb-4">Up to {maxCapacity} guests</p>

        <div className="flex items-center justify-between">
          <p className="text-2xl font-light text-primary-100">
            ${regularPrice - discount}{" "}
            <span className="text-sm text-primary-400">/ night</span>
          </p>

          <Link
            href={`/cabins/${id}`}
            className="text-accent-500 hover:text-accent-400 transition-colors font-medium border-b border-accent-500 pb-0.5"
          >
            Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
