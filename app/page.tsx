import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser()

  return (
    <>
    <div className="text-xl mb-4">Recently added</div>
      <div className="flex items-start justify-center mb-8">
        <div className="flex items-center justify-center w-full max-w-2xl border aspect-square">
          Hello is it me you're looking for
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <div className="flex justify-center items-center h-20 w-[calc(50%-1px)] border-r border-b">
          <a href="/by-category">Browse by category</a>
        </div>
        <div className="flex justify-center items-center h-20 w-[calc(50%-1px)] border-b">
          <a href="/search">Search</a>
        </div>
        <div className="flex justify-center items-center h-20 w-[calc(50%-1px)]">
          <a href="/by-popularity">Browse by popularity</a>
        </div>
        <div className="flex justify-center items-center h-20 w-[calc(50%-1px)] border-l">
          {!data?.user && <a href="/auth/login">Login</a>}
          {data?.user && <a href="/auth/logout">Welcome {data.user.email}, Logout</a>}
        </div>
      </div>
    </>
  );
}
