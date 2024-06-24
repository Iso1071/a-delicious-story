import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";

async function getRandomRecept(supabase: SupabaseClient) {
  const { data, error } =await supabase
    .from("recepts")
    .select("*");

  if (error) {
    throw error;
  }

  const count = data?.length;

  return data[Date.now()%count];
}

export default async function Home() {
  const supabase = createClient();

  const data = await getRandomRecept(supabase);

  return (
    <>
    <div className="text-xl mb-4">Chef&apos;s choice {data?.name}</div>
      <div className="flex items-start justify-center mb-8">
        <a
          href={'/recept/' + data?.id}
          className="flex items-center justify-center w-full max-w-2xl border aspect-square"
          style={{
            backgroundImage: "url('/img/placeholder-" + (Date.now()%4||4) + ".jpg')"
          }}
        >
        </a>
      </div>
    </>
  );
}
