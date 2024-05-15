import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";
function ProductCard({ product, handleAddToWishList , handleDeleted}) {

    const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded-[10px] bg-slate-200 overflow-hidden cursor-pointer shadow-lg p-8 border-black m-2 mx-5"  >

      <div>
      <img
        className="w-60 h-48 border-black-5 rounded-lg"
        src={product.image}
        alt={product.name}
        onClick={() => navigate(`/product/${product.id}`)}
      />
      </div>
      
      <div className="px-0 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl mb-2 rounded-md bg-slate-200 p-2">{product.name}</div>
          <div className='flex gap-2 items-center'>
          <div onClick={() => handleAddToWishList(product.id)} >
            <MdAddShoppingCart className="text-blue-500 cursor-pointer" />
          </div>
          <div onClick={() => handleDeleted(product.id)} >
            <MdDeleteForever className="text-red-500 cursor-pointer" />
          </div>
          </div>
        </div>
        <p className="text-white text-base bg-slate-500 border-radius-50 rounded-md p-3">{product.specifications}</p>
      </div>
      <div className="px-0 pt-2 pb-2 mb-2 bg-blue-200 opacity-80 rounded-md">
        <span className="text-white text-base bg-slate-500 p-3">Size: {product.size}</span>
      </div>
      <div className="px-0 pt-2 pb-2 bg-blue-200 opacity-80 rounded-md">
      <span className=" text-white text-base bg-slate-500 p-3">${product.price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
