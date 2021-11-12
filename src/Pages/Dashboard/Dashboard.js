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
import Toolbar from "@mui/material/Toolbar";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import DashboardHome from "./DashboardHome/DashboardHome";
import AddProduct from "./AddProduct/AddProduct";
import AddAdmin from "./AddAdmin/AddAdmin";
import AddReview from "./AddReview/AddReview";
import ManageOrders from "./ManageOrders/ManageOrders";
import ManageProducts from "./ManageProducts/ManageAllProducts";
import Payments from "./Payments/Payments";
import MyOrders from "./MyOrders/MyOrders";
import logo from "../../Images/caltivity-logo.png";
import useralogo from "../../Images/userlogo.png";
import DashboardNotFound from "../NotFound/DashboardNotFound";

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

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
  const { user, googleSignOut } = useAuth();
  let { path, url } = useRouteMatch();

  let userimg;

  if (user.photoURL) {
    userimg = user.photoURL;
  } else {
    userimg = useralogo;
  }

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
      <AppBar position='fixed' className='bg-white' open={open}>
        <Toolbar className='container'>
          <IconButton
            className='text-black'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box className='mx-auto flex justify-center items-center '>
            <Typography
              className='mr-4 text-black border-b-2 border-transparent hover:border-yellow-700'
              noWrap
              component='div'
            >
              Dashboard
            </Typography>
            <Link
              to='/'
              className='ml-4 mr-4 hidden md:block text-black border-b-2 border-transparent hover:border-yellow-700'
            >
              Home
            </Link>
            <Link
              to='/all-products'
              className='mr-4 hidden md:block text-black border-b-2 border-transparent hover:border-yellow-700'
            >
              Explore Products
            </Link>
          </Box>
          {user?.email ? (
            <>
              <Box className='flex flex-col md:flex-row justify-center md:justify-between items-center mr-2 ml-auto'>
                <div class='dropdown'>
                  <img
                    title={user?.displayName}
                    className='rounded-full mr-2'
                    src={userimg}
                    width='40px'
                    alt='img'
                    type='button'
                    id='dropdownMenu2'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  />
                  <div
                    class='dropdown-menu dropdown-menu-right py-2 mt-2 shadow-sm bg-gray-50 bg-opacity-80 backdrop-filter backdrop-blur-md'
                    aria-labelledby='dropdownMenu2'
                  >
                    <button class='dropdown-item font-extrabold' type='button'>
                      {user?.displayName}
                    </button>
                    <button class='dropdown-item' type='button'>
                      Settings
                    </button>
                    <hr></hr>
                    <button class='dropdown-item' type='button'>
                      Help
                    </button>
                  </div>
                </div>
                {/* <h4 className='text-black my-2 md:my-0'>
                      {user?.displayName}
                    </h4> */}
              </Box>
              <Box className='my-auto'>
                <Link
                  className='px-3 py-1 hidden md:block font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-40 my-2 md:my-0 text-white bg-yellow-800 bg-opacity-50'
                  to='/'
                  onClick={googleSignOut}
                >
                  Sign out
                </Link>
              </Box>
            </>
          ) : (
            <Box>
              <Link
                className='px-3 mr-2 font-semibold py-1 rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-30 my-2 md:my-0 text-white bg-yellow-800 bg-opacity-50'
                to='/signup'
              >
                Sign up
              </Link>
              <Link
                className='px-3 py-1 font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-30 my-2 md:my-0 text-white bg-yellow-800 bg-opacity-50'
                to='/signin'
              >
                Sign in
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>

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
          <Box className='mx-auto flex justify-center items-center'>
            <Link
              to='/'
              className='mochiy text-2xl hover:text-yellow-700 hover:text-opacity-50 flex items-center'
            >
              <img className='w-10 mr-2' src={logo} alt='' />
              <p className='text-lg'>Claytivity</p>
            </Link>
          </Box>
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

        <Link className='text-black hover:text-black block md:hidden' to='/'>
          <ListItem button>
            <ListItemIcon>
              <i class='fas fa-home'></i>
            </ListItemIcon>
            Home
          </ListItem>
        </Link>
        <Link
          className='text-black hover:text-black block md:hidden'
          to='/all-products'
        >
          <ListItem button>
            <ListItemIcon>
              <i class='fas fa-border-all'></i>
            </ListItemIcon>
            Explore products
          </ListItem>
        </Link>

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
            <MyOrders></MyOrders>
          </Route>

          <Route path='*'>
            <DashboardNotFound></DashboardNotFound>
          </Route>
        </Switch>
      </Main>
    </Box>
  );
}
