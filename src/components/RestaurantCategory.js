import ItemList from "./ItemList.js";
import { useState } from "react";

const RestaurantCategory = ({data, isActive, onShow}) =>{


    return (
    <div>
        <div className="w-6/12 mx-auto flex-col justify-between items-center bg-gray-50 shadow-lg p-2 cursor-pointer">
            <div className="flex justify-between w-full items-center"  onClick={onShow}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="text-2xl curosr-pointer">↓</span>
            </div>

            {isActive && <ItemList  key={data?.title} items={data.itemCards} />}

        </div>

        
       
    </div>

)}

export default RestaurantCategory;