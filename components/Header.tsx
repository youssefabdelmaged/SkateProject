import Link from "next/link";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Boards", href: "/boards" },
  { label: "Wheels", href: "/wheels" },
  { label: "Team", href: "/team" },
 ];

export const Header = () => {
  return (
    <header className="header absolute left-0 right-0 top-0 z-50 fl-px-4/6 py-4 md:py-6">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
        {/* Logo */}
        <Link
          href="/"
          className="col-start-1 row-start-1 justify-self-start transition-transform hover:scale-105"
        >
          <Logo className=" text-brand-purple  fl-h-12/20" />
          <span className="sr-only">Suburbia Skateboards Home</span>
        </Link>

        {/* Navigation */}
        <nav
          aria-label="Main"
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <ul className="flex flex-wrap items-center justify-center gap-6  text-lg   text-zinc-800 md:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative py-1 transition-colors hover:text-brand-orange focus-visible:text-brand-orange fl-text-lg/xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Cart CTA */}
        <div className="col-start-2 row-start-1 justify-self-end md:col-start-3">
          <ButtonLink
            href="/cart"
            icon="cart"
            color="purple"
            aria-label="Cart (1)"
            className="!mx-0"
          >
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Cart (1)</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
