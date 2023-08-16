import { Container, Grid } from "@mui/material"
import { TraverseFlow } from "../components/TraverseFlow"
import { TraverseMap } from "../components/TraverseMap"
import { TraverseMenu } from "../components/TraverseMenu"

export const Traverse = () => {
  return (
    <Container maxWidth="xl" sx={{padding:'0px'}}>
      <Grid container minWidth='xl'>
        <Grid item xs={2}>
          <TraverseMenu />
        </Grid>
        <Grid item xs={5}>
          <TraverseFlow />
        </Grid>
        <Grid item xs={5}>
          <TraverseMap />
        </Grid>
      </Grid>
    </Container>
  )
}
