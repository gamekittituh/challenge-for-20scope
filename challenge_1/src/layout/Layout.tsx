import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

interface LayoutState {
    children: any
}

class Layout extends React.Component <LayoutState> {
  render() {
    return (
      <>
        <Header />
            <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout