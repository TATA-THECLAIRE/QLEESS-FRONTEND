import React from 'react'

export default function NAV() {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          FLASHQ
        </span>

        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="#"
              className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
            >
              FLASHQ
            </a>
          </li>

          <li>
            <a
              href="/"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/components/cusdash"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Admin
            </a>
          </li>

          <li>
            <a
              href="/components/admin"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Queue
            </a>
          </li>

          <li>
            <a
              href="/components/customer"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Join Queue
            </a>
          </li>
        </ul>
      </div>

     
    </div>
  );
}

