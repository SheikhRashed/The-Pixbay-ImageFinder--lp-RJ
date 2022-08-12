import React, { useState, useEffect } from "react"
// import Header from "./Components/Header/Header";
import { Container, Navbar, Form } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import ImageLists from "./Components/ImageLists/ImageLists";

import styles from "./Components/Header/Header.module.css"

function App() {
  const [search, setSearch] = useState("")
  const [limit, setLimit] = useState(5)
  const [pictures, setPictures] = useState([])

  console.log(search)

  const searchHandler = (e) => setSearch(e.target.value)
  const showPerPage = (e) => setLimit(e.target.value)



  async function fetchPicture(search, limit) {
    try {
      fetch(`https://pixabay.com/api/?key=29176684-20b5605bcebb5041e4d8821ca&q=${search}&image_type=photo&per_page=${limit}&safesearch=true`)
        .then(res => res.json())
        .then(data => setPictures(data.hits))

    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchPicture(search, limit)
  }, [search, limit])

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#home">pixBay</Navbar.Brand>
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
      <ImageLists pictureList={pictures} />
    </>
  );
}

export default App;
