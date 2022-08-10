import React from "react"

import { Container, Navbar } from "react-bootstrap"

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">PixBay Image Finder </Navbar.Brand>
      </Container>
    </Navbar>
  )
}