import { Box, List, ListItem, Typography } from "@mui/material"
import { myCities } from "src/utils/traversePages"



export const City = () => {
  return (
    <Box>
        <Typography>Cities</Typography>
        <List>
          {myCities.map(({country,city,date},index)=>(
            <ListItem key={index}>
                <Box>
                  {country}
                </Box>
                <Typography>{city}</Typography>
                <Typography>{date}</Typography>
            </ListItem>
          ))}
        </List>
    </Box>
  )
}
