import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ImageCard from "../ImgCard/ImgCard"
import styles from "./ImageLists.module.css"

export default function ImageLists() {
  return (
    <div className={`py-5 ${styles.imageResult}`}>
      <Container>
        <Row>
          <Col sm={6} lg={4}>
            <ImageCard />
          </Col>
        </Row>
      </Container>
    </div>
  )
}