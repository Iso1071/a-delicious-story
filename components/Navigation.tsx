import { createClient } from "@/utils/supabase/server";

export default async function Navigation() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser()

  return (<div className="flex items-center justify-between mb-8">
    <a className="text-2xl underline underline-offset-8" href="/">
      <div>A Delicious Story</div>
    </a>
    <div className="flex gap-4">
      <a className="underline" href="/by-category">Browse by category</a>
      <a className="underline" href="/search">Search</a>
      {!data?.user && <a className="underline" href="/auth/login">Login</a>}
      {data?.user && <a className="underline" href="/auth/logout">Logout</a>}
    </div>
  </div>);
}

