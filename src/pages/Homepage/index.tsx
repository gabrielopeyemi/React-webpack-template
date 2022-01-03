import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Container } from './style'

export default function HomePage() {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <h2>React webpack template</h2>
        <div>Let build something really awesome</div>
      </Container>
    </React.Fragment>
  )
}
