import './globals.css'
import { Inter } from 'next/font/google'
import Nav from "./modules/layout/template/nav"
import {Body} from "./modules/layout/template/body"
import {SocialMedia} from './modules/layout/template/socials'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Olumuyiwa',
  description: "Daodu Muyiwa's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      
      <body className={`${inter.className}`}>
          <Nav/>
          <Body>
            {children}
          </Body>
      </body>
    </html>
  )
}