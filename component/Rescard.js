import URL from "../component/constant";
const Rescard=(props)=>{
    const {resData}=props;
    console.log(resData);
    const {cloudinaryImageId,name,cuisines,avgRating,sla,costForTwo}=resData;
     return(
      <div className="rescard">
         
         <img alt="img" className="resimg" src={URL+cloudinaryImageId} />
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating} Stars</h4>
         <h4>{sla.deliveryTime} Mins</h4>
         <h4>{costForTwo}</h4>
      </div>
   )
 };

 export default Rescard;