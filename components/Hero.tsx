"use client";

import { useTranslations } from "next-intl";
import CreateConnectionForm from "./shared/CreateConnectionForm";

export function Hero() {
  const t = useTranslations();

  return (
    <nav className="py-12">
      <div className="container text-center">
        <h1 className="text-5xl font-bold ">{t("hero.title")}</h1>
      </div>
      <div className="py-24">
        <CreateConnectionForm />
      </div>
    </nav>
  );
}
