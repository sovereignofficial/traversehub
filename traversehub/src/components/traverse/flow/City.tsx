import { Box, List, ListItem, Typography } from "@mui/material"

const myCities = [
  {country:'DE',city:'Berlin',date:'August 17,2023'},
  {country:'TR',city:'Antalya',date:'August 17,2023'},
  {country:'TR',city:'Bodrum',date:'August 17,2023'},
  {country:'TR',city:'Izmir',date:'August 17,2023'},
]

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
