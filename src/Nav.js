import React from 'react'
import { Navbar, Button, Link, Text, Grid } from "@nextui-org/react";
import "./nav.css"
// import DinnerImage from "./pexels-mat-brown-1395964.jpg"


export default function Nav() {
  return (
    <div className='navbar-background'>
      <Grid css={{margin: "0"}}>

      <Navbar isCompact isBordered variant="sticky" maxWidth="100%">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            EaTZ
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link  href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content css={{padding: "2em"}}>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* <img src={DinnerImage} /> */}
      </Grid>
    </div>
    
  )
}