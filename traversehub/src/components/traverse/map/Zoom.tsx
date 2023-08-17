import { Add, Remove } from "@material-ui/icons"
import { Box, Button } from "@mui/material"

export const Zoom = () => {
  return (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',
        gap:1,
    }}>
    <Button variant="contained"><Add/></Button>
    <Button variant="contained"><Remove/></Button>
    </Box>
  )
}
