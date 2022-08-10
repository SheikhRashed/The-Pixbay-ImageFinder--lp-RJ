import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap"

export default function Dialogue() {

  const [show, setShow] = useState(false)
  const modalHandler = () => setShow(!show)

  return (
    <>
      <Button onClick={modalHandler}>Modal Handler</Button>
      <Modal show={show} onHide={modalHandler} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>

    </>
  )
}

