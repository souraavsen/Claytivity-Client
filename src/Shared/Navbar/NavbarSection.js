import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useralogo from "../../Images/userlogo.png";
import logo from "../../Images/caltivity-logo.png";
import useAuth from "../../Hooks/useAuth";

const NavbarSection = () => {


  const { user, googleSignOut } = useAuth();

  let userimg;
  // Handle avatar with email registration
  if (user.photoURL) {
    userimg = user.photoURL;
  } else {
    userimg = useralogo;
  }

  return (
    <div className='sticky top-0 z-50'>
      <Navbar
        className='bg-gray-50 bg-opacity-70 backdrop-filter backdrop-blur-md'
        expand='lg'
      >

        <Container>
          <Navbar.Brand className='mx-auto flex justify-center items-center'>
            <Link
              to='/'
              className='mochiy text-2xl hover:text-yellow-700 hover:text-opacity-50 flex items-center'
            >
              <img className='w-12 mr-2' src={logo} alt='' />
              <p>Claytivity</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            className='flex flex-col md:flex-row justify-center items-center pb-2'
            id='basic-navbar-nav'
          >
            <Nav className='mx-auto flex flex-col md:flex-row justify-center items-start'>
              
              {user?.email && (
                <Nav.Link>
                  <Link
                    activeS
                    to='/dashboard'
                    className='mr-4 text-black border-b-2 border-transparent hover:border-yellow-700'
                  >
                    Dashboard
                  </Link>
                </Nav.Link>
              )}
              <Nav.Link>
                <Link
                  to='/'
                  className='mr-4 text-black border-b-2 border-transparent hover:border-yellow-700'
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to='/all-products'
                  className='mr-4 text-black border-b-2 border-transparent hover:border-yellow-700'
                >
                  Explore Products
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {user?.email && (
                <>
                  <Nav.Link className='flex flex-col md:flex-row justify-center md:justify-between items-center mr-2'>
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
                        <button
                          class='dropdown-item font-extrabold'
                          type='button'
                        >
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
                  </Nav.Link>
                </>
              )}

              {user?.email ? (
                <Nav.Link className='my-auto'>
                  <Link
                    className='px-3 py-1 font-semibold rounded-tl-lg rounded-tr-lg rounded-br-lg hover:bg-opacity-40 my-2 md:my-0 text-white bg-yellow-800 bg-opacity-50'
                    to='/'
                    onClick={googleSignOut}
                  >
                    Sign out
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link>
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
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
