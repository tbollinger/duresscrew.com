'use client'
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-mustard-900">
      <div className="relative isolate overflow-hidden pt-14">
        <Image priority layout={`fill`} objectFit={`cover`} className="absolute inset-0 -z-10 h-full w-full object-cover object-top brightness-25 grayscale" alt=""
             src="/duress.png"
        />
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678">
            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".2"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#c5cf87"/>
                <stop offset={1} stopColor="#362f26"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-mustard-400 ring-1 ring-mustard/25 hover:ring-mustard/50">
              {`It's official, we're headed to LobsterCon '23! `}
              <Link href="/blogs/lobstercon-2023" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true"/>Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-handwritten tracking-tight text-chartreuse-yellow sm:text-6xl">
              Duress Crew
            </h1>
            <h3 className="text-xl font-handwritten tracking-tight text-mustard sm:text-2xl">
              Central MA chapter
            </h3>
            <p className="mt-6 text-lg leading-8 text-mustard-300">
              Dominating the local scene since 2020
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/*<Link*/}
              {/*  className="rounded-md bg-mustard-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-mustard-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard-400"*/}
              {/*  href="#">*/}
              {/*  Get started*/}
              {/*</Link>*/}
              <Link href="/blogs/" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".2"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#c5cf87"/>
                <stop offset={1} stopColor="#362f26"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-semibold leading-7">{`uhhh what's a Duress Crew?`}</p>
          <h2 className="mt-2 text-4xl font-handwritten tracking-tight text-chartreuse-yellow-600 sm:text-6xl">About us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {`Duress Crew is a dedicated group of card players committed to Magic: The Gathering. A casual crew of people grinding out new tech in old scenes. We meet weekly to play MTG at a number of different card stores and help local businesses by providing a community of dedicated players who show up consistently.`}
          </p>
        </div>
      </div>


    </div>
  )
}

export default Page