import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ReviewsIcon from "@mui/icons-material/Reviews";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import DashboardHome from "./DashboardHome/DashboardHome";
import AddProduct from "./AddProduct/AddProduct";
import AddAdmin from "./AddAdmin/AddAdmin";
import AddReview from "./AddReview/AddReview";
import ManageOrders from "./ManageOrders/ManageOrders";
import ManageProducts from "./ManageProducts/ManageAllProducts";
import Payments from "./Payments/Payments";
import UserOrders from "./UserOrders/UserOrders";
import NotFound from "../NotFound/NotFound";

const drawerWidth = 220;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { user, googleSignOut } = useAuth()
  let { path, url } = useRouteMatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CssBaseline />

      {/* <Box className='flex'> */}
      <IconButton
        className='mb-auto'
        color='inherit'
        aria-label='open drawer'
        onClick={handleDrawerOpen}
        edge='start'
        size='large'
        sx={{ ml: 1, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <Typography
            sx={{ fontWeight: 700, fontSize: 20 }}
            className='m-auto text-black'
            paragraph
          >
            Dashboard
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Link className='text-black hover:text-black' to={`${url}/add-product`}>
          <ListItem button>
            <ListItemIcon>
              <i class='fas fa-plus'></i>
            </ListItemIcon>
            Add Product
            {/* <ListItemText primary={"Add Product"} /> */}
          </ListItem>
        </Link>

        <Link
          className='text-black hover:text-black'
          to={`${url}/manage-all-orders`}
        >
          <ListItem button>
            <ListItemIcon>
              <i class='fas fa-tasks'></i>
            </ListItemIcon>
            Manage Orders
            {/* <ListItemText primary={"Manage Orders"} /> */}
          </ListItem>
        </Link>

        <Link className='text-black hover:text-black' to={`${url}/add-admin`}>
          <ListItem button>
            <ListItemIcon>
              <i class='fas fa-user-shield'></i>
            </ListItemIcon>
            Add Admin
          </ListItem>
        </Link>

        <Link
          className='text-black hover:text-black'
          to={`${url}/manage-products`}
        >
          <ListItem button>
            <ListItemIcon>
              <ManageSearchIcon></ManageSearchIcon>
            </ListItemIcon>
            Manage Products
          </ListItem>
        </Link>

        <Divider />

        <Link className='text-black hover:text-black' to={`${url}/myorders`}>
          <ListItem button>
            <ListItemIcon>
              <ReorderOutlinedIcon />
            </ListItemIcon>
            My Orders
          </ListItem>
        </Link>

        <Link className='text-black hover:text-black' to={`${url}/add-review`}>
          <ListItem button>
            <ListItemIcon>
              <ReviewsIcon></ReviewsIcon>
            </ListItemIcon>
            Add Review
            {/* <ListItemText primary={"Add Review"} /> */}
          </ListItem>
        </Link>

        <Link className='text-black hover:text-black' to={`${url}/payments`}>
          <ListItem button>
            <ListItemIcon>
              <PaymentsOutlinedIcon />
            </ListItemIcon>
            Payments
          </ListItem>
        </Link>

        <Divider />

        {user?.email && (
          <Link
            className='text-black hover:text-black'
            to='/'
            onClick={googleSignOut}
          >
            <ListItem button>
              <ListItemIcon>
                <i class='fas fa-sign-out-alt'></i>
              </ListItemIcon>
              <ListItemText primary={"Sign Out"} />
            </ListItem>
          </Link>
        )}
      </Drawer>
      <Main
        open={open}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <DrawerHeader />

        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/:add-product`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/add-admin`}>
            <AddAdmin></AddAdmin>
          </Route>

          <Route path={`${path}/add-review`}>
            <AddReview></AddReview>
          </Route>
          <Route path={`${path}/manage-all-orders`}>
            <ManageOrders></ManageOrders>
          </Route>
          <Route path={`${path}/manage-products`}>
            <ManageProducts></ManageProducts>
          </Route>

          <Route path={`${path}/payments`}>
            <Payments></Payments>
          </Route>

          <Route path={`${path}/myorders`}>
            <UserOrders></UserOrders>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Main>
    </Box>
  );
}
