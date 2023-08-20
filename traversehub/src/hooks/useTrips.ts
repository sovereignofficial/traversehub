import { useContext, useEffect } from "react"
import { TripContext } from "../context/TripContext";

export const useTrips = () =>{
    const context = useContext(TripContext);

    if(!context) throw new Error('TripContext used outside the provider!');

    useEffect(()=>{
       context.fetchTrips && context.fetchTrips();
    },[])

    return context
}