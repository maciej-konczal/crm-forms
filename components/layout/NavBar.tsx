"use client";

import { Logo } from "../Logo";
import { useTranslations } from "next-intl";

export function NavBar() {
  const t = useTranslations();

  const menuItems: {
    label: string;
    href: string;
  }[] = [
    {
      label: t("navbar.tab1"),
      href: "/first",
    },
    {
      label: t("navbar.tab2"),
      href: "/second",
    },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-xl tracking-tight">
          <Logo></Logo>
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {menuItems.map((menuItem) => (
            <a
              key={menuItem.href}
              // href={menuItem.href}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4"
            >
              {menuItem.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
