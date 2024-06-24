import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import Image from "next/image";
import { redirect } from "next/navigation";

async function getCategory(supabase: SupabaseClient, id: number) {
  const { data, error } =await supabase
    .from("categories")
    .select("*")
    .eq("id", id)
    .order("name");

  if (error) {
    throw error;
  }

  return data[0];
}

async function getRecepts(supabase: SupabaseClient, catId: number) {
  const { data, error } = await supabase
    .from("recepts")
    .select("*")
    .eq("category_id", catId)
    .order("name");

  if (error) {
    throw error;
  }

  return data;
}

export default async function Page({params}: {params:{id:number}}) {
  const supabase = createClient();
  const category = await getCategory(supabase, params.id);

  if (!category) {
    redirect('/by-category');
  }

  const recepts = await getRecepts(supabase, params.id);

  return (<>
    <a href="/by-category" className="block text-xl mb-4">&lt; back</a>

    <div className="mb-16 bg-center bg-no-repeat bg-cover" style={{
         backgroundImage: "url('/img/placeholder-" + (params.id%4||4) + ".jpg')"
    }}>
      <div className="flex items-center border p-16 text-4xl font-black
                      text-gray-800">
        {category.name}
      </div>
    </div>

    <div className="grid grid-cols-3 gap-4">
      {recepts.map(row => (
        <a 
          href={'/recept/' + row.id}
          key={row.id} className="flex items-center justify-center flex-col">
          <Image 
            src={'/img/placeholder-' + (row.id%4||4) + '.jpg'} 
            alt={row.name}
            width={200}
            height={200}/>
          {row.name}
        </a>
      ))}
    </div>
  </>);
}
