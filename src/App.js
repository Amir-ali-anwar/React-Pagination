import React, { useState, useEffect } from "react";
import { useFetch } from "./Hooks/useFetch";
import Follower from "./Components/Follower";
function App() {
  const { loading, data } = useFetch();
  const [follower, Setfollowers] = useState([]);
  const [page, Setpage] = useState(1);
  //  console.log(follower);
  useEffect(() => {
    if (loading) return;
    Setfollowers(data[page]);
  }, [loading, page]);
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline" />
      </div>
      <section className="followers">
        <div className="container">
          {follower?.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            {data?.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${
                    index === page ? "active-btn" : ""
                  }`}
                  onClick={() => Setpage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
