import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function Nav(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  }
  const navigate=useNavigate();
const btnClicked=(item)=>{
    console.log(item);
item=="Home"? navigate("/"):navigate(`/${item}`)
}
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
     <IconButton
                color="inherit"
              >
                <LocalLibraryIcon fontSize="large"/>
              </IconButton>
      <Divider />
      
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} onClick={()=>{
                btnClicked(item)
            }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{background:'black'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justifyContent={"flex-start"} alignItems={"center"}>
            <Grid item>
              <IconButton
                color="inherit"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <LocalLibraryIcon fontSize="large"/>
              </IconButton>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                    flexDirection: "flex-start",
                  },
                }}
              >
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#fff" }} onClick={()=>{
                    btnClicked(item)
                }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
          <IconButton color="inherit">
         <AccountCircleIcon fontSize="large" onClick={()=>{btnClicked("Profile")}}/>
          </IconButton> 
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
