import { Logo } from "../Logo";

export function NavBar() {
  const menuItems: {
    label: string;
    href: string;
  }[] = [
    {
      label: "First tab",
      href: "/first",
    },
    {
      label: "Second tab",
      href: "/second",
    },
  ];
  return (
    <nav
      className={`bg-background/80 fixed left-0 top-0 z-20 w-full backdrop-blur-lg`}
    >
      <div className="container">
        <div className="flex items-center justify-stretch gap-6 py-8">
          <div className="flex flex-1 justify-start">
            <a
              href="/"
              className="block hover:no-underline active:no-underline"
            >
              <Logo></Logo>
            </a>
          </div>

          <div className="hidden flex-1 items-center justify-center md:flex">
            {menuItems.map((menuItem) => (
              <button
                key={menuItem.href}
                // href={menuItem.href}
                className="block px-3 py-2 text-lg"
              >
                {menuItem.label}
              </button>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-end gap-3">TBD</div>
        </div>
      </div>
    </nav>
  );
}
