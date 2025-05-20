'use client'
import clsx from "clsx"
import {useState} from 'react'
import {Dialog} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from "next/link";
import Image from "next/image";

const links = [
  {name: 'Home', href: '/'},
  // {name: 'Blog', href: 'https://duresscrew.substack.com/'},
  {name: 'Content and Discord Links', href: '/resources'},
  {name: 'Premodern Data Project', href: 'https://data.duresscrew.com/'},
  {name: 'Support Us', href:'https://ko-fi.com/duresscrew/'}
]


const Navigation = ({transparent = false}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={clsx(transparent ? `absolute inset-x-0 top-0 z-50` : `bg-black color-white`)}>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Duress Crew</span>
            <Image priority objectFit={`cover`} src="/logo.png" className="h-10 w-auto aspect-square" width={200} height={200} alt=""/>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-chartreuse-yellow-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {links.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-chartreuse-yellow">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/*<Link href="#" className="text-sm font-semibold leading-6 text-white">*/}
          {/*  Log in <span aria-hidden="true">&rarr;</span>*/}
          {/*</Link>*/}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50"/>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto text-white bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Duress Crew</span>
              <Image priority objectFit={`cover`} src="/logo.png" className="h-10 w-auto aspect-square" width={200} height={200} alt=""/>
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-chartreuse-yellow-400" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {links.map((item) => (
                  <Link key={item.name} href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-chartreuse-yellow-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                {/*<Link href="#" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white hover:bg-chartreuse-yellow-800">*/}
                {/*  Log in*/}
                {/*</Link>*/}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navigation