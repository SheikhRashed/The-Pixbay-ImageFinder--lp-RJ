import React, { useState } from "react"
import Dialogue from "../Dialogue/Dialogue"
import { MdOutlineZoomOutMap } from "react-icons/md"

import "./ImgCard.css"

export default function ImgCard({ picture }) {

  const [show, setShow] = useState(false)
  const previewHandler = () => setShow(!show)

  return (
    <>
      <Dialogue largeImage={picture.largeImageURL} show={show} modalHandler={previewHandler} />
      <div className="card bg-white">
        <div className="card-img">
          <img src={picture.webformatURL} alt="..." />
          <div className="card-zoom">
            <button onClick={previewHandler}>
              <MdOutlineZoomOutMap />
            </button>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{picture.user}</h5>
          <p className="card-text">{picture.tags}</p>
        </div>
      </div>
    </>

  )
}