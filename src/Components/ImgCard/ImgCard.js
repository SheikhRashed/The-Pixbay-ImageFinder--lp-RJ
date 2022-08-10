import React from "react"
import "./ImgCard.css"
import { MdOutlineZoomOutMap } from "react-icons/md"
export default function ImgCard() {

  return (
    <div className="card bg-white">
      <div className="card-img">

        <img src="https://images.unsplash.com/photo-1659976440475-5d6e1f43ddf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="..." />

        <div className="card-zoom">
          <button>
            <MdOutlineZoomOutMap />
          </button>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>

  )
}