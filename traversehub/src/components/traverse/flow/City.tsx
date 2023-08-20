import { useTrips } from "../../../hooks/useTrips";
import { Box, Button, Link, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material"
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
export const City = () => {
  const param = useParams();
  const { getTrip, trip } = useTrips();
  const navigate = useNavigate();

  useEffect(() => {
    param.id && getTrip && getTrip(parseInt(param.id));
  }, [])

  return (
    <Box sx={{
      width: '90%',
      height: '400px',
      border: '1px solid rgb(60,60,60)',
      padding: 0,
      margin: '4px auto',
      borderRadius: '15px'
    }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" align="center">{trip?.city}</Typography>
        </Box>
        <Button onClick={()=>navigate(-1)}>Back</Button>
      </Toolbar>
      <List>
        <ListItem alignItems="flex-start" sx={{
          flexDirection: 'column'
        }}>
          <Typography color={'gray'} variant="h6">Country</Typography>
          <ListItemText>{trip?.country}</ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start" sx={{
          flexDirection: 'column'
        }}>
          <Typography color={'gray'} variant="h6">You Went {trip?.city} On</Typography>
          <ListItemText>{trip?.date.toLocaleString()}</ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start" sx={{
          flexDirection: 'column'
        }}>
          <Typography color={'gray'} variant="h6">Notes</Typography>
          <ListItemText>{trip?.notes}</ListItemText>
        </ListItem>
        <ListItem alignItems="flex-start" sx={{
          flexDirection: 'column'
        }}>
          <Typography color={'gray'} variant="h6">Learn More</Typography>
          <Link target="_blank" href={`https://tr.wikipedia.org/wiki/${trip?.city}`}>Check out {trip?.city} on Wikipedia</Link>
        </ListItem>
      </List>
    </Box>
  )
}
