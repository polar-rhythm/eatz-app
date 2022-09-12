import React from 'react'
import { Navbar, Button, Link, Text, Grid } from "@nextui-org/react";
import "./nav.css"
import DinnerImage from "./pexels-mat-brown-1395964.jpg"




export default function Nav() {
  return (
    <div className='navbar-background'>
      <Grid >

        <Navbar isCompact isBordered variant="sticky" maxWidth="100%" >
          <Navbar.Brand>
            <Text b color="black" hideIn="xs">
              EaTZ
          </Text>
          </Navbar.Brand>
          <Navbar.Content hideIn="xs" variant="underline">
            <Navbar.Link isActive href="#">Products</Navbar.Link>
            <Navbar.Link href="#">Customers</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Company</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content css={{ padding: "2em" }}>
            <Navbar.Link  color="inherit" href="#">
              Login
          </Navbar.Link>
            <Navbar.Item>
              <Button auto flat as={Link} href="#">
                My cart
            </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
        <div className="pat">
          <h1>The best and most reliable </h1>
          <button>Our menu</button>
          <img src={DinnerImage} alt='' className='pic' />
        </div>
      </Grid>

    </div>

  )
}