import { SearchIcon, CircleX } from 'lucide-react'

export const Search = () => {
  return (
    <div className="relative group w-full md:w-60">
      <SearchIcon
        className="text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 group-focus-within:text-blue-300"
      />

      <input
        type="text"
        placeholder="Buscar"
        className="w-full h-10 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-sm outline-none transition-all duration-200 focus:border-blue-300 focus:ring-1 focus:ring-blue-300 placeholder:text-gray-300"
      />

      <CircleX
        className="absolute w-4 h-4 top-1/2 -translate-y-1/2 right-3 text-gray-300 cursor-pointer"
      />
    </div>
  )
}
