import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Resmenu=()=>{
    
    const [Menu,setMenu]=useState([]);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);
        setMenu(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info)
        console.log(json);
        
    }
   //const {name,cuisines,costForTwo}= menu?.info;
   return Menu == null ?( <Shimmer />) :
    (
       
        <div className="resmenu">
            <h1></h1>
        </div>

    );
}

export default Resmenu;