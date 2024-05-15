import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";
import { IoLink } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


function Product({ products, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState();


  useEffect(() => {
    const data = products.filter((product) => product.id === parseInt(id))[0];

    setProduct(data);


  }, []);



  return (
    <div className="flex justify-center item-center">
    <div className="max-w-xl rounded-[10px] bg-slate-200 overflow-hidden cursor-pointer shadow-lg p-8 border-black m-2 mx-5">
      <div className="bg-blue-200 w-[90%] h-auto shadow-md flex gap-6 rounded-lg p-8">
        <div className="w-[60%]">
          <img src={product?.image} className="h-30 w-full object-cover" alt={product?.name} />
        </div>
        <div className="w-[50%] pl-4 flex flex-col gap-2 ">
          <div onClick={() => navigate(`/profile/${product?.merchant_id}`)} className="text-4xl flex cursor-pointer font-bold">{product?.name}
            <IoLink  className="text-s text-blue-400" /> 
          </div>
          {/* <p className="text-xs text-blue-700 font-semibold underline cursor-pointer " >Merchant </p> */}
          <p className="  ">Price: ${product?.price}</p>
          <p className="text-lg font-semibold">Size: {product?.size}</p>
          <p className="text-lg font-semibold">{product?.specifications}</p>

          <div className="mt-6 flex gap-2 w-full justify-around">
            <Accordion className="w-full">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="text-white text-base bg-slate-500 border-radius-50 rounded-md p-3">
                    Specifications
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-gray-100 px-4 py-2">
                  <p>
                    {product?.specifications}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="text-white text-base bg-slate-500 border-radius-50 rounded-md p-3">
                    Overview
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-gray-100 px-4 py-2">
                  <p>
                    {product?.overview}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Product;
