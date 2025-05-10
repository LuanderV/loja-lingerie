import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    name: "Sutiãs sem bojo",
    image: "https://picsum.photos/seed/sutias-sem-bojo/300",
    link: "/",
  },
  {
    name: "Calcinhas básicas",
    image: "https://picsum.photos/seed/calcinhas-basicas/300",
    link: "/",
  },
  {
    name: "Bodies",
    image: "https://picsum.photos/seed/bodies/300",
    link: "/",
  },
  {
    name: "Calcinhas de renda",
    image: "https://picsum.photos/seed/calcinhas-renda/300",
    link: "/",
  },
  {
    name: "Sutiãs de renda",
    image: "https://picsum.photos/seed/sutias-renda/300",
    link: "/",
  },
  {
    name: "Calcinhas fio dental",
    image: "https://picsum.photos/seed/calcinhas-fio-dental/300",
    link: "/",
  },
  {
    name: "Sutiã com bojo",
    image: "https://picsum.photos/seed/sutia-com-bojo/300",
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
