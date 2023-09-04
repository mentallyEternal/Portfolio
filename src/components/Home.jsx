import React from "react";
import image from "../image.jpg";

function Home() {
  return (
    <section>
      <div>
        <h1 className="greeting">Hello, </h1>
        <h1 className="intro">I am David</h1>
        <img src={image} alt="brain circutry img" />
      </div>
    </section>
  );
}
export default Home;
