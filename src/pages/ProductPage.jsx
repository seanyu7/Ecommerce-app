import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import img1 from "../img/img1.jpg";

function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center ">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Product_image"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className="flex-[1.2] flex items-start justify-items-start flex-col mt-10">
          <h1 className="title text-[40px] ">classical suit for any ocasion</h1>
          <p className="pr-[4rem] text-justify mt-4">
            You can use this tipe of classical suits at any occasion in your
            life. you can go to work by wearing this and also you can ware this
            for your wedding occasion.
          </p>
          <p className="mt-7 text-3xl">
            Price:<b>70,000yen</b>
          </p>
          {/*color variants */}
          <div className="flex mt-7 text-2xl ">
              Colors
              <div className=" bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
              <div className="bg-green-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
              <div className="bg-black w-[2rem] h-[2rem] rounded-full text-white border-2 p-[10px] cursor-pointer ml-5"></div>
          </div>
          <div className="mt-7 text-2xl ">
              size
              <select className="ml-5 border-2 ">
                  <option selected disabled>Select</option>
                  <option value="">Small</option>
                  <option value="">Medium</option>
                  <option value="">Large</option>
              </select>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
