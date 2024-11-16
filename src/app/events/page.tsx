'use client'
import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyArhdG5F5Kq9v1dx_hVMw0Ak5e7fkkz1XM";
let calendars = [
  { calendarId: "duresscrew@gmail.com" },
];

const page = () => {
  return (
    <div>
      <div className="flex items-center bg-neutral-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-chartreuse-yellow sm:text-6xl font-handwritten">
              Upcoming Events
            </h1>
          </div>
        </div>
      </div>

      <div className={"mt-2"}>
        <div className="max-w-full mx-auto">
          <main className={`bg-white relative`}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Calendar apiKey={API_KEY} calendars={calendars} />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default page