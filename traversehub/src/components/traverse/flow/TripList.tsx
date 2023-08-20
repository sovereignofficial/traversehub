import { Delete } from '@material-ui/icons'
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Button, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Trip } from '@utils/types.d'
import { useTrips } from '../../../hooks/useTrips'

export const TripList = ({ trips }: { trips: Partial<Trip>[] }) => {
    const navigate = useNavigate();
    const {trip} = useTrips()
    const theme = useTheme();

    return (
        <List >
            {trips.map((item, index) => (
                    <ListItem sx={trip?.id === item.id ?{
                        background:theme.palette.primary.main,
                        borderRadius:'15px'
                    }:{
                        background:'transparent',
                        borderRadius:'15px'

                    }} key={index} >
                        <ListItemButton onClick={()=>item?.id && navigate(`${item.id}?lat=${item.position?.lat}&lng=${item.position?.lng}`)} alignItems='center' >
                            <ListItemIcon>
                                {item?.ctCode}
                            </ListItemIcon>
                            <ListItemText inset primary={item?.country} />
                            <ListItemText inset primary={item?.city} />
                            {/* <ListItemText>{item?.city}</ListItemText> */}
                            <ListItemText inset>{item?.date?.toLocaleString()}</ListItemText>
                            <Button><Delete /></Button>
                        </ListItemButton>
                    </ListItem>
            ))}
        </List>
    )
}
