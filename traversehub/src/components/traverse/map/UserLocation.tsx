import { useGeolocation } from "../../../hooks/useGeolocation"
import { MyLocation } from "@material-ui/icons"
import { Button } from "@mui/material"
import { useEffect } from "react"

export const UserLocation = ({setLocation}:{
    setLocation:(position:{
        lat:number,
        lng:number
    })=>void
}) => {

    const geolocation = useGeolocation();
    
    useEffect(()=>{
        geolocation.getPosition();
    },[]);
    
  return (
    <Button variant="contained" sx={{
        position: 'absolute',
        bottom:30,
        right:"35%",
        zIndex: 1000,
      }} onClick={() => {
        setLocation(geolocation.position);
      }}><MyLocation/> Use My Location</Button>
  )
}
