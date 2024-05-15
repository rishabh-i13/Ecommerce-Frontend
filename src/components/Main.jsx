import React, {useEffect, useState} from 'react'
import Card from './Card'
import axios from 'axios'
import bgImg from "../assets/roomimage.jpeg";




function Main({ wishList, setWishList, products, setProducts }) {

  
  const handleAddToWishList = (productId) => {
    const newWishList = [...wishList, productId];
    setWishList(newWishList);
  }

  const handleDeleted = (id) => {
    
    axios.delete(`https://backend-homedesign.onrender.com/products/${id}`)
    .then(setProducts(products.filter((product) => product.id !== id)))
    .catch(err => console.log(err))
    
  }

  const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
  };


  return (
    <>
    <main className="bg-cover bg-center relative  ">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-white text-center pt-24 h-[95vh] mb-[-40px] flex align-center justify-center">
          <h1 className="text-4xl font-bold bg-blue-">Where world meets reality</h1>
        </div>
      </main>
    <div id='products' className='w-full flex flex-col mt-10 pt-10 bg-white justify-center items-center  '>
        <div className='flex flex-start ml-10 items-center text-4xl font-bold mb-10'>
                  Our Products
        </div>
        <div className=' w-[80vw] m-[auto] flex justify-center item-center pb-10 flex-wrap'>
           {
            products.map((product) => (
              <Card key={product.name} product={product} handleAddToWishList={handleAddToWishList} handleDeleted={handleDeleted} />
            ))
           }
        </div>
    </div>
    </>
  )
}

export default Main
