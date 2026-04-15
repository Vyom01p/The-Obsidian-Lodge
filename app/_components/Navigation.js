import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  const navLinkStyles =
    "text-primary-100 text-base uppercase tracking-[0.2em] font-light hover:text-accent-400 transition-all duration-300 hover:tracking-[0.25em] relative group";

  return (
    <nav className="z-10">
      <ul className="flex gap-12 items-center">
        <li>
          <Link href="/cabins" className={navLinkStyles}>
            Cabins
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link href="/about" className={navLinkStyles}>
            About
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="flex items-center gap-4 text-primary-100 hover:text-accent-400 transition-all duration-300 group"
            >
              <img
                className="h-8 w-8 rounded-full border border-primary-800 group-hover:border-accent-400 transition-all"
                src={session.user.image}
                alt={session.user.name}
                referrerPolicy="no-referrer"
              />
              <span className="text-base uppercase tracking-[0.2em] font-light group-hover:tracking-[0.25em] relative">
                Guest area
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          ) : (
            <Link href="/account" className={navLinkStyles}>
              Guest area
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
