import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    name: "Sutiãs sem bojo",
    image: "/img/collections-grid/sutias-sem-bojo.jpg",
    link: "/",
  },
  {
    name: "Calcinhas básicas",
    image: "/img/collections-grid/calcinhas-basicas.jpg",
    link: "/",
  },
  {
    name: "Bodies",
    image: "/img/collections-grid/bodies.jpg",
    link: "/",
  },
  {
    name: "Calcinhas de renda",
    image: "/img/collections-grid/calcinhas-renda.jpg",
    link: "/",
  },
  {
    name: "Sutiãs de renda",
    image: "/img/collections-grid/sutias-renda.jpg",
    link: "/",
  },
  {
    name: "Calcinhas fio dental",
    image: "/img/collections-grid/calcinhas-fio-dental.jpg",
    link: "/",
  },
  {
    name: "Sutiãs com bojo",
    image: "/img/collections-grid/sutias-com-bojo.jpg",
    link: "/",
  },
];

export default function CollectionsGrid() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Nossas Coleções
      </h2>

      <div className="overflow-hidden">
        <div className="flex gap-6 px-2 md:px-4 lg:px-6 w-max mx-auto">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={collection.link}
              className="flex flex-col items-center hover:scale-105 transition-transform flex-shrink-0"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-gray-300 shadow-md">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="mt-3 text-sm sm:text-base font-medium text-gray-800 text-center">
                {collection.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
