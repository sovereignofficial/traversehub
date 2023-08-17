import { Box, Container, Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material"
import { PageNav } from "../components/PageNav"
import dummy from '/dummy-app.jpg'




export const Product = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
      <Container maxWidth='xl'>
        <PageNav />
        <Grid container spacing={5} direction={isMobile ? 'column' : 'row'}
         alignItems='center' justifyContent='center' my={5}>
          <Grid item xs={4}>
            <Paper square elevation={3} sx={{ padding: 4 }}>
              <Typography variant="h4" my={5} align="center">About <strong style={{color:"#bda85e"}}>TraverseHub</strong></Typography>
              <Typography variant="body1" align="center">
                Embark on a journey of discovery like never before with TraverseHub.
                Our world map comes alive with pins placed by fellow travelers,
                each representing a unique place waiting to be explored. Dive into a treasure trove of experiences as you read comments,
                view captivating photos, and gain insights shared by those who've treaded the path before you.
                When a pin intrigues you, a single click unveils not only the beauty of the destination but also the most budget-friendly reservations available. TraverseHub isn't just a map; it's your gateway to a world of adventure, stories, and practical travel solutions.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper square elevation={3} sx={{ padding: 0 }}>
              <Box component="img" src={dummy} alt="app" width="100%" height="100%" sx={{
                filter: 'brightness(80%)',
                objectFit: 'cover',
              }} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
  )
}
