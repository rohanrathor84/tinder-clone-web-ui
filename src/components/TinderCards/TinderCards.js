import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import { getCards } from "../../utils/apiClient";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getCards()
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((item, index) => (
          <TinderCard
            className="swipe"
            key={index}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, item.name)}
            onCardLeftScreen={() => outOfFrame(item.name)}
          >
            <div
              style={{ backgroundImage: `url(${item.imgUrl})` }}
              className="card"
            >
              <h3>{item.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;

const staticData = [
  {
    name: "Lili Reinhart",
    url: "https://akns-images.eonline.com/eol_images/Entire_Site/2022717/rs_634x1024-220817121528-634-Lili-Reinhart-LT-81722-shutterstock_editorial_13097487gq.jpg",
  },
  {
    name: "Sydney Sweeney",
    url: "https://akns-images.eonline.com/eol_images/Entire_Site/2022714/rs_634x1024-220814140553-634-sydney-sweeney.cm.81422.jpg",
  },
  {
    name: "Sela Vave",
    url: "https://akns-images.eonline.com/eol_images/Entire_Site/2022711/rs_634x1024-220811121229-634-Sela-Vave-LT-81122-shutterstock_editorial_13079438hs.jpg",
  },
  {
    name: "Katy Perry",
    url: "https://akns-images.eonline.com/eol_images/Entire_Site/202279/rs_634x1024-220809163202-634-katy-perry.ct.jpg",
  },
  {
    name: "Daisy Edgar-Jones",
    url: "https://akns-images.eonline.com/eol_images/Entire_Site/202275/rs_634x1024-220805165353-634-daisy-edgar-jones.ct.jpg",
  },
  {
    name: "Olivia Rodrigo",
    url: "https://akns-images.eonline.com/eol_images/Entire_Site/2022628/rs_634x1024-220728123605-634-Olivia-Rodrigo-LT-72822-shutterstock_editorial_13053133ad.jpg",
  },
];
