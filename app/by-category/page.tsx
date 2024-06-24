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
      {categories.map((row) => (
        <li key={row.id} 
          className={`my-2 bg-center bg-no-repeat bg-cover`}
          style={{
            backgroundImage: "url('/img/placeholder-" + (row.id%4||4) + ".jpg')"
          }}>
          <a href={'/category/' + row.id} 
            className="flex items-center border p-16 text-4xl font-black
                       text-gray-800">
            {row.name}
          </a>
        </li>
      ))}
    </ul>
  </>);
}
