import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

async function getCategory(supabase: SupabaseClient, id: string) {
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

export default async function Page({params}: {params:{id:string}}) {
  const supabase = createClient();
  const category = await getCategory(supabase, params.id);

  if (!category) {
    redirect('/by-category');
  }

  return (<>
    <div className="text-xl mb-4">Browse by Category {category.name}</div>
  </>);
}
