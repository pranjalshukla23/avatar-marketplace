import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/userContext";
import { ColorRing } from "react-loader-spinner";
function Product() {
  const { getSingleProduct, count, setCount } = useContext(UserContext);
  const [product, setProduct] = useState();
  const [picture, setPicture] = useState("");
  const params = useParams();
  const { id } = params;

  const fetchProduct = () => {
    const singleProduct = getSingleProduct(id);
    setProduct(singleProduct);
    setPicture(singleProduct.images[0]);
  };

  const incrementCount = () => {
    setCount((prevVal) => prevVal + 1);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) {
    return (
      <div className='flex justify-center items-center'>
        <ColorRing
          visible={true}
          height='80'
          width='80'
          ariaLabel='blocks-loading'
          wrapperStyle={{}}
          wrapperClass='blocks-wrapper'
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center items-center gap-8 '>
      {/* slideshow container */}
      <div className='slideshow h-full w-full lg:w-1/3 flex flex-col lg:flex-row items-center justify-center '>
        <div className=' flex flex-col-reverse lg:flex-row items-center justify-center  gap-4  h-4/5 '>
          <div className='flex flex-row lg:flex-col gap-4'>
            {product &&
              product.images.map((image, index) => (
                <div
                  className='w-12 lg:w-24 hover:brightness-50 cursor-pointer'
                  key={index}
                  onClick={() => setPicture(image)}
                >
                  <img
                    src={image}
                    className={`object-fit rounded-md ${
                      picture === image ? "brightness-50" : ""
                    }`}
                    alt='product'
                  />
                </div>
              ))}
          </div>

          {picture && (
            <div className='picture h-full w-3/4'>
              <img src={picture} alt='pictute' className='h-full rounded-md' />
            </div>
          )}
        </div>
      </div>

      <div className=' h-full w-full lg:w-1/2 flex flex-col justify-center'>
        {/* details section */}
        <div className=' flex flex-col justify-between gap-4  h-4/5 p-2 font-extrabold'>
          {/* info */}
          <div className='info font-Inter flex flex-col gap-4'>
            <h1 className='text-3xl '>{product.name}</h1>
            <span>Platform: {product.platform}</span>
            <span className='text-4xl font-sans'>${product.price}</span>
            <div className='about flex flex-col gap-4'>
              <h2 className='underline text-lg'>About this item</h2>
              <p className='text-base font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae velit culpa quia quo deleniti repellendus sapiente
                reprehenderit iusto sunt aliquid ullam aut similique facilis
                officia dolores corrupti dicta quos quasi, fugiat optio iure
                temporibus veritatis totam quaerat. Reiciendis deserunt, numquam
                magnam error iure odio et? Odio beatae aut eum dolor? Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Facilis
                similique ea ipsam. Suscipit excepturi neque autem, ipsam vitae
                asperiores eveniet!
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className='buttons flex flex-row'>
            <button
              className='bg-blue-500 px-2 py-2 text-white rounded-md mx-4 hover:bg-blue-800'
              onClick={incrementCount}
            >
              Add To Cart
            </button>
            <button className='bg-blue-500 px-2 py-2 text-white hover:bg-blue-800 rounded-md'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
