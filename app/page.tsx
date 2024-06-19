export default function Home() {
  return (
    <>
    <div className="text-xl">Recently added</div>
      <div className="homepage__carousel-container">
        <div className="homepage__carousel">
          Hello is it me you're looking for
        </div>
      </div>

      <div className="homepage__menu">
        <div>
          <a href="/by-category">Browse by category</a>
        </div>
        <div>
          <a href="/Search">Search</a>
        </div>
        <div>
          <a href="/by-popularity">Browse by popularity</a>
        </div>
        <div>
          <a href="/login">Login</a>
        </div>
      </div>
    </>
  );
}
