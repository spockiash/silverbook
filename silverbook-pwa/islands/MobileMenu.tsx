import { useState } from "preact/hooks";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span class="sr-only">Open main menu</span>
        {!open ? (
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        ) : (
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Items */}
      {open && (
        <div class="absolute top-16 left-0 bg-gray-900 w-full flex flex-col px-2 pt-2 pb-3 sm:px-3">
            <a href="/" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Exposures</a>
            <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Equipment</a>
            <a href="/about" class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
        </div>
      )}
    </div>
  );
}
