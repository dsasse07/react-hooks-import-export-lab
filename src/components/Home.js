import React from "react";
import * as UserData from "../data/user"



function Home() {
  return (
    <div id="home">
      <h1>
        {UserData.username} is a Web Developer from {UserData.city}
      </h1>
    </div>
  );
}

export default Home
