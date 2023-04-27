import React from "react";
import Card from "./Card";

function CardItems({ avatarsArr }) {
  return (
    <div className=' pt-4 py-2 font-medium text-2xl'>
      All Items
      <div className='grid-container grid  grid-cols-4 auto-rows-auto gap-4 mt-4'>
        {avatarsArr.map((avatar) => (
          <Card avatar={avatar} key={avatar.id} />
        ))}
      </div>
    </div>
  );
}

export default CardItems;
