import './globals.css'

import { Rock_Salt } from 'next/font/google';
import { Pirata_One } from 'next/font/google';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const rock_salt = Rock_Salt({
  variable: '--font-rock-salt',
  display: 'swap',
  weight: '400',
  subsets: ['latin'],
});

const pirata_one = Pirata_One({
  variable: '--font-pirata-one',
  display: 'swap',
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'DuressCrew.com',
  description: 'The Duress Crew Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`h-full ${rock_salt.variable} ${pirata_one.variable} `}>
      <body className={`h-full`}>
      <Navigation transparent={true} />
      {children}
      <Footer/>
      </body>
    </html>
  )
}
