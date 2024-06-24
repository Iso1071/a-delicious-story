import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";
import { doSearch } from "./actions";
import { sanitize } from "@/utils/sanitize";
import Image from "next/image";

async function getBySearch(supabase:SupabaseClient, q: string) {
  const { data, error } =await supabase
    .from("recepts")
    .select("*")
    .ilike('name', `%${q}%`)
    .order("name");

  if (error) {
    throw error;
  }

  return data;
}



export default async function Page({
  searchParams,
}: {
  searchParams?: {q:string},
}) {
  const q = sanitize(searchParams?.q || '');

  let results = [];

  const supabase = createClient();
  
  if (q) {
    results = await getBySearch(supabase, q);
  }
  
  return (<>
    <div className="text-xl mb-4">Search</div>

    <form>
      <div className="flex w-full mb-4">
          <input 
            className="grow text-black p-4 border-y rounded-l-lg bg-white focus:outline-none focus:ring-0" 
            id="search" 
            name="search"
            type="text" 
            required />
          <button 
            className="grow-0 text-black p-4 border-y rounded-r-lg bg-white" 
            formAction={doSearch}>
              search
          </button>
      </div>
    </form>

    {!q && <div>Use the searchbar to find recepts</div>} 
    
    {q && <div>
      {!results.length && 'No results found... try searching something else'}

      {results.length && <div className="grid grid-cols-3 gap-4">
        {results.map((i, index) => (<a 
          href={'/recept/' + i.id}
          key={i.id} className="flex items-center justify-center flex-col">
          <Image 
            src={'/img/placeholder-' + (index%4||4) + '.jpg'} 
            alt={i.name}
            width={200}
            height={200}/>
          {i.name}
        </a>))}
      </div> || ''}
    </div>}
  </>);
}
