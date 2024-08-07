import Rescard from "./Rescard";;
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

    const [listOfRestaurants,setlistOfRestaurants]=useState([]);
    const [filterres,setfilteredres]=useState([]);
    const [searchtext,setsearchtext]=useState("");
    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData=async()=>{
      const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json=await data.json();
      setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilteredres(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
   
    return listOfRestaurants.length == 0 ?(<Shimmer />):(
    <div className="body">
      <div>
        <div className="search">
          <input type="text" className="search-box" 
          value={searchtext} 
          onChange={(e)=>{
           setsearchtext(e.target.value);
          }}></input>
          <button onClick={()=>{
              const filterdList=listOfRestaurants.filter(
                (res)=>res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                setfilteredres(filterdList);
          }}>Search</button>
        
        <button className="filter-btn"
      onClick={()=>{
         const filterdList=listOfRestaurants.filter(
            (res)=>res.info.avgRating>4.3
        );
        console.log(filterdList);
         setfilteredres(filterdList);
      }}>
        Top Rated</button>
        </div>
      </div>
    
      <div className="res-container">
      {
        filterres.map((resturant)=>(<Rescard key={resturant?.info?.id} resData={resturant?.info}/>))
      }
      </div>
    </div>
    )

};

export default Body;