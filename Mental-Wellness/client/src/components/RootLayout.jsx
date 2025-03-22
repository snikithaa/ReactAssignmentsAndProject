import React from 'react'
import { ClerkProvider } from '@clerk/clerk-react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


function RootLayout() {
    const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

    if (!PUBLISHABLE_KEY) {
        throw new Error("Missing Publishable Key")
    }



    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <div>
                <Header />
                <div className=""  style={{minHeight:"90vh"}}>
                    <Outlet />
                </div>
                <Footer/>
            </div>
        </ClerkProvider>
    )
}

export default RootLayout