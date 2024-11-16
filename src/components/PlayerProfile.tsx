'use client'
import clsx from "clsx"
import {useRef, useState} from 'react'
import {Dialog} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import Link from "next/link";
import Image from "next/image";

const links = [
  {name: 'Home', href: '/'},
  {name: 'Player Profiles', href: '/player-profiles'},
  {name: 'Blog', href: '/blogs'},
]

import {PaperClipIcon} from '@heroicons/react/20/solid'
import {Player} from "@/interfaces/Player";

const PlayerProfile = (player: Player) => {

  return (
    <li key={player.name}>
      <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={player.imageUrl} alt=""/>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <h3 className="mt-6 text-gray-600">
        {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
        <span className={"text-lg font-semibold leading-8 tracking-tight text-gray-900"}>{player.name}</span> {player.nick? <span className="text-sm text-gray-500"> // <span className="text-xs text-gray-500">aka</span> {player.nick}</span> : null}
      </h3>
      <div className="relative mt-2">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"/>
        </div>
        <div className="relative flex justify-start">
          <span className="bg-white pr-2 text-sm text-gray-400">Favorite Card</span>
        </div>
      </div>
      <p className="text-base leading-7 text-gray-600">{player.favorite_card}</p>
      <div className="relative mt-2">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"/>
        </div>
        <div className="relative flex justify-start">
          <span className="bg-white pr-2 text-sm text-gray-400">Background</span>
        </div>
      </div>
      <p className="text-base leading-7 text-gray-600">{player.background}</p>
      {/*<ul role="list" className="mt-4 flex gap-x-6">*/}
      {/*  <li>*/}
      {/*    <a href={player.xUrl} className="text-gray-400 hover:text-gray-500">*/}
      {/*      <span className="sr-only"> X</span>*/}
      {/*      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">*/}
      {/*        <path*/}
      {/*          d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"/>*/}
      {/*      </svg>*/}
      {/*    </a>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <a href={player.linkedinUrl} className="text-gray-400 hover:text-gray-500">*/}
      {/*      <span className="sr-only">LinkedIn</span>*/}
      {/*      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">*/}
      {/*        <path*/}
      {/*          fillRule="evenodd"*/}
      {/*          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"*/}
      {/*          clipRule="evenodd"*/}
      {/*        />*/}
      {/*      </svg>*/}
      {/*    </a>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </li>
  )
}

export default PlayerProfile



