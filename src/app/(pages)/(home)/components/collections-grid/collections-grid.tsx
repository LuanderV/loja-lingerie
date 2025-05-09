import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    name: "Sutiãs sem bojo",
    image: "https://picsum.photos/seed/sutias-sem-bojo/300",
    link: "/colecoes/sutias-sem-bojo",
  },
  {
    name: "Calcinhas básicas",
    image: "https://picsum.photos/seed/calcinhas-basicas/300",
    link: "/colecoes/calcinhas-basicas",
  },
  {
    name: "Bodies",
    image: "https://picsum.photos/seed/bodies/300",
    link: "/colecoes/bodies",
  },
  {
    name: "Calcinhas de renda",
    image: "https://picsum.photos/seed/calcinhas-renda/300",
    link: "/colecoes/calcinhas-renda",
  },
  {
    name: "Sutiãs de renda",
    image: "https://picsum.photos/seed/sutias-renda/300",
    link: "/colecoes/sutias-renda",
  },
  {
    name: "Calcinhas fio dental",
    image: "https://picsum.photos/seed/calcinhas-fio-dental/300",
    link: "/colecoes/calcinhas-fio-dental",
  },
  {
    name: "Sutiã com bojo",
    image: "https://picsum.photos/seed/sutia-com-bojo/300",
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
