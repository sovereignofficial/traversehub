import { Box, Grid, useMediaQuery, useTheme } from "@mui/material"
import { TraverseMenu } from "../components/traverse/TraverseMenu"
import { TraverseContent } from "../components/traverse/TraverseContent"
import { MobileMenu } from "../components/traverse/MobileMenu";

export const Traverse = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <Box>
      <Grid container direction={isMobile ? 'column' : 'row'}>
        {
          isMobile
            ? (<MobileMenu />)
            : (
              <Grid item xs={2}>
                <TraverseMenu />
              </Grid>
            )
        }
        <Grid item xs={10}>
          <TraverseContent />
        </Grid >
      </Grid>
    </Box>
  )
}
