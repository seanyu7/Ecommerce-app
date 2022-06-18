import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";

export default function Gegechabin({ item }) {
  const [hoverEffect, setHovereffects] = useState('opacity-0');

  const handleHoverEnter = () => {
    setHovereffects(' opacity-1 bg-[rgba(0,0,0,0.2)');
  };

  const handleHoverExit = () => {
    setHovereffects(' opacity-0');
  };

  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";

  return (
    <div
      className="flex flex-1  items-center justify-center min-w-[200px] min-h-[300px] max-w-[200pz] max-h-[300px] overflow-hidden rounded-md shadow-lg m-2 relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={item.src} alt="product_image" />
      <div className={` flex items-center justify-center w-[250px] h-[350px] absolute ease-in duration-100` + hoverEffect}>
        {/*icons */}
        <div className={iconStyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
}
