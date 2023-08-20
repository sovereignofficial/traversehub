import { Box } from "@mui/material"
import { TripList } from "./TripList"
import { useTrips } from "../../../hooks/useTrips"



export const CityList = () => {
  const {trips} = useTrips();
  
  return (
    <Box>
        <TripList trips={trips} />
    </Box>
  )
}
