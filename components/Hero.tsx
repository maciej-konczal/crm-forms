"use client";

import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations();

  return (
    <nav className=" border-b py-24">
      <div className="container text-center">
        <h1 className="text-5xl font-bold lg:text-7xl">{t("hero.title")}</h1>
      </div>
    </nav>
  );
}
