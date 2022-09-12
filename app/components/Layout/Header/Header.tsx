import { Link } from "@remix-run/react";

const LINKS = [
  { label: "Inbox", to: "/inbox" },
  { label: "Candidates", to: "/candidates" },
  { label: "Comparision", to: "/comparision" },
  { label: "Reports", to: "/reports" },
];

export default function Header() {
  return (
    <nav className="mx-2 mt-2 flex h-14  min-w-0 items-center rounded-md border-b bg-white px-6 py-2 drop-shadow-lg">
      <div>
        <h1 className="text-lg font-semibold">RecruIT</h1>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="flex gap-6">
          {LINKS.map(({ label, to }) => (
            <Link
              className="underline-custom ml-4 px-3 py-2 text-sm font-medium leading-5 text-gray-900 hover:text-sky-600 focus:text-sky-600 focus:outline-none"
              key={label}
              to={to}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        Profile
        <button className="ml-2 h-10 w-10 rounded-full border bg-gray-400 text-center leading-none text-gray-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600">
          <i className="fas fa-user fill-current"></i>
        </button>
      </div>
    </nav>
  );
}
