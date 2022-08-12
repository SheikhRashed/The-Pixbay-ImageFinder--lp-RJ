import React, { useState, useEffect } from "react"
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import ImageLists from "./Components/ImageLists/ImageLists";
function App() {

  const [pictures, setPictures] = useState([])
  async function fetchPicture() {
    try {
      fetch(`https://pixabay.com/api/?key=29176684-20b5605bcebb5041e4d8821ca&q=flower&image_type=photo&per_page=10&safesearch=true`)
        .then(res => res.json())
        .then(data => setPictures(data.hits))

    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchPicture()
  }, [])

  return (
    <>
      <Header />
      <ImageLists pictureList={pictures} />
    </>
  );
}

export default App;
