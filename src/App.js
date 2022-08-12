import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ImageLists from "./Components/ImageLists/ImageLists";
import Header from "./Components/Header/Header";

function App() {

  const [search, setSearch] = useState("")
  const [limit, setLimit] = useState(5)
  const [pictures, setPictures] = useState([])

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
      <Header search={search} setSearch={setSearch} limit={limit} setLimit={setLimit} />
      <ImageLists pictureList={pictures} />
    </>
  );
}

export default App;
