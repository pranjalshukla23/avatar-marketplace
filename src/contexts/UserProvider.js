import React, { useState } from "react";
import { avatarsArr } from "../data/avatar";
import UserContext from "./userContext";

function UserProvider({ children }) {
  const [avatars, setAvatars] = useState(avatarsArr);
  const [count, setCount] = useState(0);

  const getSingleProduct = (id) => {
    const matchedProducts = avatars.filter((a) => a.id === parseInt(id));
    if (matchedProducts) {
      return matchedProducts[0];
    }
  };

  return (
    <UserContext.Provider
      value={{
        avatars,
        count,
        setCount,
        getSingleProduct,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
