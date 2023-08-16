import { Container, Typography, Box, Grid } from "@mui/material"
import { PageNav } from "../components/PageNav"
import icon from '/traversehub-icon.png';
export const PageNotFound = () => {
  return (
    <Container maxWidth='xl'>
      <PageNav />
      <Grid container alignItems='center' justifyContent='center' spacing={5}>
        <Grid item>
          <Box component='img' src={icon} mt={10}/>
        </Grid>
        <Grid item>
          <Typography variant="h1" align="center" mt={10}>Page Not Found</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
