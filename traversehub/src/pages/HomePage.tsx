import { Link } from "react-router-dom";
import { PageNav } from "../components/PageNav"
import { Button, Typography, Grid, Container, Box } from '@mui/material';

export const HomePage = () => {
  return (

    <Box
      component="div"
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),url('/bg.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh', // Set the height of the background image container
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PageNav />
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography mt={10} variant="h3">
              Incredible Social Platform for Travelers
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography mt={1} variant="body1">
              Explore the world like never before with TraverseHub. Discover new places with other user travelers around the world,
              find optimized reservations, learn before you go.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Link to="traverse">
              <Button variant="contained">Start Journey</Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
