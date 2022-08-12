import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import ImageCard from "../ImgCard/ImgCard"
import styles from "./ImageLists.module.css"

export default function ImageLists({ pictureList }) {

  return (
    <>
      <div className={`py-5 ${styles.imageResult}`}>
        <Container>
          <Row>
            {
              pictureList.map((picture, idx) => (
                <Col sm={6} lg={4} className="mb-4" key={idx}>
                  <ImageCard picture={picture} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>

    </>
  )
}