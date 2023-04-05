import React from 'react'
import Header from './components/layout/Header'
import Navbar from './components/layout/Navbar'
import Content from './components/content'

const App = () => {
  return (
    <React.Fragment>
    <Header />
    <div style={{display: "flex"}}>
    <Navbar />
    <Content />
    </div>
    </React.Fragment>
  )
}

export default App