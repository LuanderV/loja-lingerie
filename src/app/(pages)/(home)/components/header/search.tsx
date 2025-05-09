export default function Search() {
  return (
    <div className="flex justify-end items-center px-8 py-4 gap-8 mx-28">
      <div className="relative min-w-80">
        <input
          type="text"
          placeholder="Buscar Produtos..."
          className="w-full pl-4 pr-4 py-2 rounded-full border border-gray-300"
        />
        <span className="absolute right-4 top-2.5 text-gray-600 text-xl" />
      </div>
      <div className="flex space-x-6 text-white text-2xl">
        <span className="hover:text-pink-600 cursor-pointer transition" />
        <span className="hover:text-pink-600 cursor-pointer transition" />
        <span className="hover:text-pink-600 cursor-pointer transition" />
      </div>
    </div>
  );
}
