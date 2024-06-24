import { createClient } from "@/utils/supabase/server";
import { SupabaseClient } from "@supabase/supabase-js";

interface Ingredient {
  unit: string;
  quantity: string;
  ingredients: {
    name: string;
  }
}

async function getRecept(supabase: SupabaseClient, id: number) {
  const { data, error } =await supabase
    .from("recepts")
    .select(`id, 
             name,
             description,
             steps,
             categories(
               id,
               name
             ),
             recept_ingredient(
               unit,
               quantity,
               ingredients(name)
             )
           `)
    .eq("id", id)
    .order("name");

  if (error) {
    throw error;
  }

  return data[0];
}

export default async function Page({params}: {params:{id:number}}) {
  const supabase = createClient();
  const recept: any = await getRecept(supabase, params.id);

  return (<>
    <a href={'/category/' + recept.categories.id} className="block text-xl mb-4">
      &lt; back to {recept.categories.name}
    </a>

    <div className="mb-16 bg-center bg-no-repeat bg-cover" style={{
         backgroundImage: "url('/img/placeholder-" + (params.id%4||4) + ".jpg')"
    }}>
      <div className="flex items-center border p-16 text-4xl font-black
                      text-gray-800">
        {recept.name}
      </div>
    </div>

    <div className="mb-8">
      <div className="text-xl underline">Description</div>
      <div className="mt-2">
        {recept.description}
      </div>
    </div>

    <div className="mb-8">
      <div className="text-xl underline">Ingredients</div>
      <ul className="mt-2">
        {recept.recept_ingredient.map((item: Ingredient, i: number) => (
          <li key={i}>
            {item.ingredients.name}: {item.quantity || ''} {item.unit || ''}
          </li>  
        ))}
      </ul>
    </div>

    <div className="mb-8">
      <div className="text-xl underline">Steps</div>
      <ul className="mt-2">
        {recept.steps?.split('\n').map((step: string) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
    </div>
  </>);
}
