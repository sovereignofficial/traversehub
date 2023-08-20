import { Box } from "@mui/material"
import { TripList } from "./TripList"
import { Trip } from "../../../utils/types.d"
import { useTrips } from "../../../hooks/useTrips"

export const CountryList = () => {
    const {trips}= useTrips();
    const expData = trips.reduce((acc:{country:string}[],currItem)=>{
        if(!acc.some((item:Partial<Trip>)=> item.country === currItem.country)){
            return [...acc,{ctCode:currItem.ctCode,country:currItem.country}]
        }else{
            return acc
        }
    },[])

    return (
        <Box>
            <TripList trips={expData}/>
        </Box>
    )
}
