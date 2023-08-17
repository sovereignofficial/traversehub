import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import { Logo } from './Logo';

export const PageNav = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <AppBar color="transparent" position='static'
            component={'nav'}>
            <Toolbar sx={{flexDirection:isMobile?'column':'row'}}>
                <Box sx={{ flexGrow: 1, maxHeight: "50px" }}>
                    <Logo />
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Grid container gap={2} alignItems='center'>
                        <Grid item>
                            <NavLink to="/pricing" style={{ color: '#fff', textDecoration: 'none' }}>Pricing</NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to="/product" style={{ color: '#fff', textDecoration: 'none' }}>Product</NavLink>

                        </Grid>
                        <Grid item>
                            <NavLink to="/login" style={{ color: '#fff', textDecoration: 'none' }}>
                                <Button component="button" variant="contained">
                                    Login
                                </Button>
                            </NavLink>
                        </Grid>

                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
