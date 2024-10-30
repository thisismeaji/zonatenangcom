import Navigation from "@/components/navigation/Navigation"
import "./globals.css"

export const metadata = {
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <header>
          <Navigation/>
        </header>
        {children}
      </body>
    </html>
  )
}
