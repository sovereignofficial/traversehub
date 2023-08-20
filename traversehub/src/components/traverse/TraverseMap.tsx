import { Box, Typography } from "@mui/material"
import { useSearchParams } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet"
import { useEffect, useState } from "react"
import { LatLngExpression } from "leaflet"
import { useTrips } from "../../hooks/useTrips"
import { UserLocation } from "./map/UserLocation"
import { useGeolocation } from "../../hooks/useGeolocation"

export const TraverseMap = () => {
  const { position, getPosition } = useGeolocation();
  useEffect(() => {
    getPosition();
  }, [])

  const [searchParams, setSearchParams] = useSearchParams();
  const { trips, trip } = useTrips();
  const lat = parseFloat(searchParams.get('lat') ?? `${position.lat}` ?? '36.88480');
  const lng = parseFloat(searchParams.get('lng') ?? `${position.lng}` ?? '30.704044');

  const [location, setLocation] = useState<LatLngExpression>([lat, lng]);

  useEffect(() => {
    if (trip && lat != position.lat) {
      setLocation([trip.position.lat, trip.position.lng])
    } else {
      setLocation([lat, lng]);

    }
  }, [lat, lng, trip])

  return (
    <Box sx={{
      height: '100vh',
      backgroundColor: 'gray',
      padding: 0
    }}>

      <div id="map" style={{
        height: "100%",
        width: '100%',
        flex: 1,
        position: 'relative',
      }}>

        <MapContainer style={{
          height: '100%',
          width: '100%',
        }} center={location} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={location}>
            <Popup>
              Your Location
            </Popup>
          </Marker>
          {trips.map((item, index) => (
            <Marker key={index} position={[item.position.lat, item.position.lng]}>
              <Popup>
                <Box>
                  <Typography variant="h6">{item.city}</Typography>
                  <Typography variant="subtitle2">{item.notes}</Typography>
                  <Typography variant="body2">{item.date.toLocaleString()}</Typography>
                </Box>
              </Popup>
            </Marker>
          ))}

          <ChangeCenter location={location} />
          <CustomizedMapEvents />
          <UserLocation setLocation={(position: { lat: number, lng: number }) => setSearchParams(`lat=${position.lat}&lng=${position.lng}`)} />
        </MapContainer>
      </div>
    </Box>
  )
}

const ChangeCenter = ({ location }: {
  location: LatLngExpression
}) => {
  const map = useMap();
  map.setView(location)

  return null;
}

const CustomizedMapEvents = () => {
  useMapEvents({
    click: (e) => {
      console.log(e);
    }
  })
  return null;
}