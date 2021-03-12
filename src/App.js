import React from "react";
import PropTypes from "prop-types";

function Food({ name, image, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}</h4>
      <img src={image} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
  },
  {
    id: 2,
    name: "Samgioqsal",
    image:
      "https://i.pinimg.com/originals/c4/c5/d5/c4c5d5d428634b5ddf1aabd9f98faf60.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg",
    rating: 3,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://img.sbs.co.kr/newsnet/etv/upload/2014/01/10/30000347969_1280.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2019/03/10/168d255254103ff54861098af10adfae1.jpg",
    rating: 4,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((food) => (
        <Food
          key={food.id}
          name={food.name}
          image={food.image}
          rating={food.rating}
        />
      ))}
    </div>
  );
}

export default App;
