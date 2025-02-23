import MobileMenu from "../islands/MobileMenu.tsx";

export default function Navbar() {
  return (
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          {/* Logo */}
          <div class="flex items-center">
            <a href="/" class="shrink-0">
              <img class="size-8" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" />
            </a>
            {/* Desktop Menu */}
            <div class="hidden md:block">
              <div class="ml-10 flex space-x-4">
                <a href="/" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Exposures</a>
                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Equipment</a>
                <a href="/about" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div class="-mr-2 flex md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
