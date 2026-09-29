"use client"

import Script from "next/script"

import Header from "@/components/dashboard/Header"
import Sidebar from "@/components/dashboard/Sidebar"
import './dashboard.css'

export default function DashboardLayout({children}) {
    return (
        <>
            <html lang="en">
                <head>
                    <Script src="https://kit.fontawesome.com/b23c7cc76f.js" crossOrigin="anonymous" strategy="afterInteractive"/>
                </head>
                <body>
                    <div className="container">
                        <Sidebar />
                        <div className="main">
                            <Header />
                            {children}
                        </div>
                    </div>
                </body>
            </html>    
        </>
    )
}