import React from "react"
import { Container, Navbar, Form } from "react-bootstrap"
import styles from "./Header.module.css"

export default function Header({ search, setSearch, limit, setLimit }) {

  const searchHandler = (e) => setSearch(e.target.value)
  const showPerPage = (e) => setLimit(e.target.value)

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#home" className={styles.logo}>pixBay</Navbar.Brand>
        <div className={styles.searchImage}>
          <Form.Control placeholder="Search..." className={styles.searchField} onChange={searchHandler} value={search} />
          <Form.Select aria-label="Select Image" className={styles.selectValue} onChange={showPerPage} value={limit} >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </Form.Select>
        </div>
      </Container>
    </Navbar>
  )
}