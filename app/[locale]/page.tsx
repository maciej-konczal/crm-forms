import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Hero } from "@/components/Hero";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="mb-12 pt-8 text-center">
      <div className="container max-w-6xl pb-24">
        <Hero></Hero>
      </div>
    </div>
  );
}
