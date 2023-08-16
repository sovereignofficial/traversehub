import { Container, Typography, Grid, Card, CardHeader, CardContent, Box, CardActions, Button } from "@mui/material"
import { PageNav } from "../components/PageNav"

export const Pricing = () => {
  return (
    <Container maxWidth="xl">
      <PageNav />
      <Typography component='h1' variant='h2' align="center" my={8}>Pricing</Typography>
      <Grid container justifyContent='center' spacing={10}>
        <Grid item xs={4}> 
          <Card>
            <CardHeader title="Premium" titleTypographyProps={{align:'center'}} sx={{
              backgroundColor:'rgb(22,22,22)'
            }} />
            <CardContent>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                mb: 2,
              }}>
                <Typography variant="h3" >7$</Typography>
                <Typography variant="h6">/mo</Typography>
              </Box>
              <Typography variant='body1'>With premium membership,
                find unlimited excellent travel recommendations with price/qualified booking options.</Typography>
            </CardContent>
            <CardActions>
               <Button fullWidth variant="contained">get started</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader title="Free" titleTypographyProps={{align:'center'}} sx={{
              backgroundColor:'rgb(22,22,22)'

            }} />
            <CardContent>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
                mb: 2,
              }}>
                <Typography component="h2" variant="h3" >0$</Typography>
                <Typography variant="h6">/mo</Typography>
              </Box>
              <Typography variant='body1'>With free membership,
                find 5 excellent travel recommendations with price/qualified booking options per month.</Typography>
            </CardContent>
            <CardActions>
               <Button fullWidth variant="outlined">Sign Up For Free</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
