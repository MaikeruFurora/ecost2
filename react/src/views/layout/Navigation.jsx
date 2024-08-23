import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import InventoryIcon from '@mui/icons-material/Inventory';
import CalculateIcon from '@mui/icons-material/Calculate';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import MapIcon from '@mui/icons-material/Map';
import SummarizeIcon from '@mui/icons-material/Summarize';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Outlet,Link,Navigate  } from 'react-router-dom';
import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Config from '@services/Config.json';
import { useStateContext } from '@context/contextProvider'
import AuthenticateHooks from '../pages/auth/hooks/AuthenticationHooks';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: Config.bg_primary,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Navigation = () => {
    const {logoutSumbit} = AuthenticateHooks()
    const {token} = useStateContext()
    if (!token) {
      return <Navigate to="/login"/>
    }
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [openDropdown, setOpenDropdown] = React.useState(true);

    const handleDropdown = () => {
      setOpenDropdown(!openDropdown);
    };
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };


    return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" open={open} sx={{backgroundColor: Config.primary_color}}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 4,
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                { Config.system_name }
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
          
            <List>
              <ListItem component={Link} to="/product">
                <ListItemIcon><InventoryIcon className='icon-default-size'/></ListItemIcon>
                <ListItemText primary="Product" />
              </ListItem>
              <ListItem  component={Link} to="/costing">
                <ListItemIcon><CalculateIcon className='icon-default-size'/></ListItemIcon>
                <ListItemText primary="Costing" />
              </ListItem>
              <ListItem  component={Link} to="/trucking-matrix">
                <ListItemIcon><LocalShippingIcon className='icon-default-size'/></ListItemIcon>
                <ListItemText primary="Trucking Matrix" />
              </ListItem>
              <Divider/>
              <ListItem  component={Link} to="/truck">
                <ListItemIcon><FireTruckIcon className='icon-default-size'/></ListItemIcon>
                <ListItemText primary="Truck Type" />
              </ListItem>
              <ListItem  component={Link} to="/warehouse">
                <ListItemIcon><WarehouseIcon className='icon-default-size'/></ListItemIcon>
                <ListItemText primary="Warehouse" />
              </ListItem>
              <ListItem  component={Link} to="/destination">
                <ListItemIcon><MapIcon className='icon-default-size'/></ListItemIcon>
                <ListItemText primary="Destination" />
              </ListItem>
              {/* <ListItem  component={Link} to="/destinationdetail">
                <ListItemIcon><MapIcon className='icon-default-size'/></ListItemIcon>
                <ListItemText primary="Destination Details" />
              </ListItem> */}
              <ListItem  component={Link} to="/form">
                <ListItemIcon><SummarizeIcon className='icon-default-size'/></ListItemIcon>
                <ListItemText primary="Form" />
              </ListItem>
              <ListItem  component={Link} to="/taxcode">
                <ListItemIcon><ContentPasteSearchIcon className='icon-default-size'/></ListItemIcon>
                <ListItemText primary="Tax Code" />
              </ListItem>
              <ListItem  onClick={logoutSumbit} >
                <ListItemIcon ><PowerSettingsNewIcon color='danger' className='icon-default-size'/></ListItemIcon>
                <ListItemText primary="Logout" sx={{color:'red'}}/>
              </ListItem>
            </List>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Outlet />
          </Box>
      </Box>
    );
};

export default Navigation