import React, { useState, useEffect } from "react";
import { useFetch } from "./Hooks/useFetch";
import Follower from "./Components/Follower";
function App() {
  const { loading, data } = useFetch();
  const [follower,Setfollowers]=useState([])
  const [page,Setpage]=useState(1)
//  console.log(follower);
  useEffect(() => {
    if(loading) return
    Setfollowers(data[page])
  }, [loading]);
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className="underline" />
      </div>
      <div className='container'>
          {follower?.map((follower) => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
    </main>
  );
}

export default App;
