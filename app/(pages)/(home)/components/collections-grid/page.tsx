import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    name: "Sutiãs sem bojo",
    image: "/img/collections-grid/sutias-sem-bojo.jpg",
    link: "/colecoes/sutias-sem-bojo",
  },
  {
    name: "Calcinhas básicas",
    image: "/img/collections-grid/calcinhas-basicas.jpg",
    link: "/colecoes/calcinhas-basicas",
  },
  { name: "Bodies", image: "/img/collections-grid/bodies.jpg", link: "/colecoes/bodies" },
  {
    name: "Calcinhas de renda",
    image: "/img/collections-grid/calcinhas-renda.jpg",
    link: "/colecoes/calcinhas-renda",
  },
  {
    name: "Sutiãs de renda",
    image: "/img/collections-grid/sutias-renda.jpg",
    link: "/colecoes/sutias-renda",
  },
  {
    name: "Calcinhas fio dental",
    image: "/img/collections-grid/calcinhas-fio-dental.jpg",
    link: "/colecoes/calcinhas-fio-dental",
  },
  {
    name: "Sutiã com bojo",
    image: "/img/collections-grid/sutia-com-bojo.jpg",
    link: "/colecoes/sutia-com-bojo",
  },
];

export default function CollectionsGrid() {
  return (
    <section className="text-center py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Nossas Coleções</h2>
      <div className="flex justify-center space-x-6 px-6 ">
        {collections.map((collection) => (
          <Link
            key={collection.name}
            href={collection.link}
            className="flex flex-col items-center hover:scale-105 transition-transform flex-shrink-0"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-300 shadow-lg">
              <Image
                src={collection.image}
                alt={collection.name}
                width={160}
                height={160}
                quality={100}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="mt-3 text-sm md:text-base font-medium text-gray-800">
              {collection.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
