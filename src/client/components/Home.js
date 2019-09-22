import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'am the test Home component</div>
      <button onClick={() => console.log("Hi I am here")}>
        Press me
      </button>
    </div>
  );
};

export default Home;
