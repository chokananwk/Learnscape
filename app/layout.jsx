import './globals.css'  
import Navbar from './components/Navbar'

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
      </body>  
    </html>  
  )  
}