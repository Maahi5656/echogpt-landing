
import Script from "next/script"

export default function DashboardLayout({children}) {
    return (
        <>
            <html lang="en">
                <head>
                    <Script src="https://kit.fontawesome.com/b23c7cc76f.js" crossOrigin="anonymous" strategy="afterInteractive"/>
                </head>
                <body>{children}</body>
            </html>
        </>
    )
}