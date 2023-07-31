import React from "react";
import Card from "./Card";

function CardItems({ avatarsArr }) {
  return (
    <div className='pt-4 py-2 px-6 font-medium text-2xl border-2 border-green-500 '>
      All Items
      <div className='grid-container grid  grid-cols-1 lg:grid-cols-4 auto-rows-auto gap-4 mt-4 '>
        {avatarsArr.map((avatar) => (
          <Card avatar={avatar} key={avatar.id} />
        ))}
      </div>
    </div>
  );
}

export default CardItems;
