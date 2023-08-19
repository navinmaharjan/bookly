import React, {Fragment} from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
const Layout = ({children}) => {
  return (
    <Fragment>
        <Navigation />
        <main>{children}</main>
        <Footer />
    </Fragment>
  )
}

export default Layout