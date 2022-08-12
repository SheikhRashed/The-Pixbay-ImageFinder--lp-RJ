import React from 'react'
import { Modal } from "react-bootstrap"
import "./modal.css"

export default function Dialogue({ show, modalHandler, largeImage }) {

  return (
    <>
      <Modal show={show} onHide={modalHandler} size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered className="dialogue">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={largeImage} alt="" />
        </Modal.Body>
      </Modal>
    </>
  )
}

