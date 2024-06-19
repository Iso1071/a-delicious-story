export default function Home() {
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
          <a href="/login">Login</a>
        </div>
      </div>
    </>
  );
}
