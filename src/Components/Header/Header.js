import React, { useState } from "react"
import { Container, Navbar, Form } from "react-bootstrap"
import styles from "./Header.module.css"


export default function Header(searchValue) {

  const [search, setSearch] = useState("text")

  const searchHandler = (e) => setSearch(e.target.value)


  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#home">pixBay</Navbar.Brand>
        <div className={styles.searchImage}>
          <Form.Control placeholder="Search..." className={styles.searchField} onChange={searchHandler} value={search} />
          <Form.Select aria-label="Select Image" className={styles.selectValue} onChange={(e) => console.log(e.target.value)} >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">50</option>
          </Form.Select>
        </div>
      </Container>
    </Navbar>
  )
}