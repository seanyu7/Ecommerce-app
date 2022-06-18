import React from "react";
import { ApiTopProducts } from "../apifolder/TopProductsApi";
import Gegechabin from "./Gegechabin";

function Products() {
  return (
    <div className="flex flex-wrap p-5 items-center justify-center border-2">
      {ApiTopProducts.map((product, index) => {
        return <Gegechabin item={product} key={index} />;
      })}
    </div>
  );
}

export default Products;
