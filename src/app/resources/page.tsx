import Link from 'next/link'

const page = () => {
  return (
    <div>

      <div className="flex items-center bg-neutral-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex mx-auto max-w-2xl lg:mx-0">
            <h1 className="page-header">
              Content and Useful Links
            </h1>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-3xl mx-auto">
          <main className={`relative`}>
          <div className="bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/*<h2 className="mt-2 text-4xl font-handwritten tracking-tight text-chartreuse-yellow-600 sm:text-6xl">Resources</h2>*/}
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <Link href="https://discord.gg/7gGbaWr2rE">New England Premodern Discord and Event Calendar</Link>
            <br />  
            <br />  
            <Link href="https://discord.gg/GE6urJcGVn">Global Premodern Discord</Link>
            <br />
            <br />
            <Link href="https://linktr.ee/duresscrew">Hardcast and Other Content</Link>
          </p>
        </div>
      </div>


          </main>
        </div>
      </div>
    </div>
  )
}

export default page