import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    return(
        <div>
            <h1>{err.status}:{err.statusText}</h1>
            <h2>Something went Wrong!!!!</h2>
        </div>
    )
}
export default Error;