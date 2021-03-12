import React from "react";

function Food({ name, image }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={image} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
  },
  {
    name: "Samgioqsal",
    image:
      "https://i.pinimg.com/originals/c4/c5/d5/c4c5d5d428634b5ddf1aabd9f98faf60.jpg",
  },
  {
    name: "Bibimbap",
    image:
      "http://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg",
  },
  {
    name: "Doncasu",
    image:
      "https://img.sbs.co.kr/newsnet/etv/upload/2014/01/10/30000347969_1280.jpg",
  },
  {
    name: "Kimbap",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/10/168d255254103ff54861098af10adfae1.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((food) => (
        <Food name={food.name} image={food.image} />
      ))}
    </div>
  );
}

export default App;
