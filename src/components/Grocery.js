import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
const Grocery = () => {
   const [show, setShow]=  useState(false);
    useEffect(()=>{
        setTimeout(()=>setShow(true),1000)
    })

    
    return !show?<Shimmer />:(
        <div>
            This is the grocery page. It has a lot of child components to it.
        </div>
        
    );
}

export default Grocery;