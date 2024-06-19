import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
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

export default async function Page({params}: {params:{id:number}}) {
  const supabase = createClient();
  const category = await getCategory(supabase, params.id);

  if (!category) {
    redirect('/by-category');
  }

  return (<>
    <div className="mb-2 bg-center bg-no-repeat" style={{
         backgroundImage: "url('/img/placeholder-" + (params.id%4||4) + ".jpg')"
    }}>
      <div className="flex items-center border p-16 text-4xl font-black
                      text-gray-800">
        {category.name}
      </div>
    </div>


  </>);
}
