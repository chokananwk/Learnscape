import './globals.css'  
import Navbar from './Navbar'
import FloatingMapButton from './icon-map'

export const metadata = {  
  title: 'Leanscape',  
  description: 'Learn about local culture through interactive experiences',  
} 

export default function RootLayout({ children }) {  
  return (  
    <html lang="en">  
      <body>  
        <Navbar />  
        <main>{children}</main>  
        <FloatingMapButton />

      </body>  
    </html>  
  )  
}