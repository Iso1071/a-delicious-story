import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";

async function getCategories(supabase: SupabaseClient) {
  const { data, error } =await supabase
    .from("categories")
    .select("*")
    .order("name");

  if (error) {
    throw error;
  }

  return data;
}

export default async function Page() {
  const supabase = createClient();
  const categories = await getCategories(supabase);

  return (<>
    <div className="text-xl mb-4">Browse by Category</div>

    <ul>
      {categories.map(row => (
        <li key={row.id} className="flex items-center border p-2 my-2">
          <div className="inline-block size-16 bg-sky-300 mr-2"></div>
          {row.name}
        </li>
      ))}
    </ul>
  </>);
}
