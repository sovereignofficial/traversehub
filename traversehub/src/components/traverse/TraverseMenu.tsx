import { Box, Button, List, ListItem, styled } from "@mui/material"
import MuiDrawer from '@mui/material/Drawer';
import { Logo } from "../Logo"
import { menuItems } from "../../utils/traversePages";
import { traverseMenuItem } from "../../utils/types.d";

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: 250,
            height: '100vh',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
)

export const TraverseMenu = () => {
    return (
        <Drawer variant="permanent" open sx={{ width: '100px' }}>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Logo />
            </Box>
            <Box my={10}>
                <List >
                    {menuItems.map((item: traverseMenuItem, index: number) => (
                        <ListItem key={index}>
                            <Button fullWidth variant="outlined"><item.icon /> {item.label}</Button>
                        </ListItem>

                    ))}
                </List>
            </Box>
        </Drawer>
    )
}
