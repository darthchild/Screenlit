import {Outlet} from 'react-router-dom'
import React from 'react'


const Layout = () => {
    return (
        // including a refernce to the Outlet component in the HTML
        <main>
            <Outlet/>
        </main>
    )
}

export default Layout