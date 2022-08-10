import React from "react"

import { Container, Navbar, InputGroup, Form } from "react-bootstrap"
import styles from "./Header.module.css"
export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#home">PixBay</Navbar.Brand>
        <div className={styles.searchImage}>
          <Form.Control placeholder="Search..." className={styles.searchField} />
          <Form.Select aria-label="Select Image" className={styles.selectValue} >
            <option value="1">10</option>
            <option value="2">20</option>
            <option value="3">50</option>
          </Form.Select>
        </div>
      </Container>
    </Navbar>
  )
}