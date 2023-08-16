import {  Container } from "@mui/material"
import { Zoom } from "./map/Zoom"

export const TraverseMap = () => {
  return (
    <Container sx={{
        height:'100vh',
        backgroundColor:'gray',
        padding:1
    }}>
        <Zoom/>
    </Container>
  )
}
