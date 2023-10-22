import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

export const metadata = {
  title: "CRM Forms",
  description: "Connect easily dynamic forms with CRM systems",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar></NavBar>
          <main className="min-h-screen bg-background flex flex-col items-center">
            {children}
          </main>
          <Footer></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
