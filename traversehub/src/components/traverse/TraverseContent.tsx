import { Box, Grid, useMediaQuery, useTheme } from "@mui/material"
import { TraverseFlow } from "./TraverseFlow"
import { TraverseMap } from "./TraverseMap"

export const TraverseContent = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
   
    return (
        <Box component='main' sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        }}>
            <Grid container flexDirection={
                isMobile ? 'column' : 'row'
            }>
                <Grid item xs={isMobile?12:6}>
                    <TraverseFlow />
                </Grid>
                <Grid item xs={isMobile?12:6}>
                    <TraverseMap />
                </Grid>
            </Grid>
        </Box>
    )
}
