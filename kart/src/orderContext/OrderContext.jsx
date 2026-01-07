import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";


const OrderContext=createContext({
    orderProducts : {},
    setOrderProducts : ()=>{},
    totalOrderCount: 0,
    totalPriceCount:0,
    taxes:5,
    setTaxes:()=>{},
    shipping:0,
    setShipping:()=>{},
    discount:"",
    setDiscount:()=>{},
    setTotalPriceCount:()=>{},
    setTotalOrderCount:()=>{},
    addToKart: ()=>{},
    removeFromKart: ()=>{},
    increaseProductCount: ()=>{},
    decreaseProductCount: ()=>{},
    increaseTotalProductCount:()=>{},
    decreaseTotalProductCount:()=>{},
    discountValue: 0,
    setDiscountValue:()=>{}
})



export const OrderProvider= OrderContext.Provider

export default function useOrderKart(){
    return useContext(OrderContext)
}