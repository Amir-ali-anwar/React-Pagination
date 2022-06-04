import React, { useState, useEffect } from "react";
import { useFetch } from "./Hooks/useFetch";
import Follower from "./Components/Follower";
function App() {
  const { loading, data } = useFetch();
  const [follower, Setfollowers] = useState([]);
  const [page, Setpage] = useState(0);
  //  console.log(follower);
  useEffect(() => {
    if (loading) return;
    Setfollowers(data[page]);
  }, [loading, page]);
  const prevpage = () => {
    Setpage((oldpage) => {
      let nextPage = oldpage - 1;
      if (nextPage > data.length - 1|| nextPage <0) {
        nextPage = data.length - 1;
      }
      return nextPage;
    });
  };
  const nextpage = () => {
    Setpage((oldpage) => {
      let nextPage = oldpage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
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
            <button className="prev-btn" onClick={prevpage}>
              prev
            </button>
            {data?.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : ""}`}
                  onClick={() => Setpage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextpage}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
