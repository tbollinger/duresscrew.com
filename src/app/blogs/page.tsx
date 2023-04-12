import React, {use} from "react"
import {getBlogs} from "@/lib/blogs";
import Link from "next/link";
import {Blog} from "@/interfaces/Blog";

async function getInitialBlogs() {
  return getBlogs();
}

const page = () => {
  const posts = use(getInitialBlogs())
  console.log(posts)
  return (
    <div>
      <div className="flex items-center bg-neutral-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex mx-auto max-w-2xl lg:mx-0">
            <div className={``}>
              {/*<p className="text-base font-semibold leading-7 text-indigo-600">MTG ideas worth writing about</p>*/}
              <h2 className="mt-2 text-4xl font-bold tracking-tight text-chartreuse-yellow sm:text-6xl font-handwritten">Duress Crew Blog</h2>
              <p className="mt-6 text-lg leading-8 text-mustard font-handwritten">
                From The Abyss to Zur: The latest tech off the top deck
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl border-b-2 border-gray-200">
          <div className="py-16 space-y-16">
            <h2 className="text-left text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl md:text-6xl pl-10">
              Latest Posts
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-white mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-16">
            <ul role="list" className="divide-y divide-gray-200">
              {posts.map((post: Blog) => (
                <li key={post.id} className={`p-10`}>
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={post.datetime}>{post.datetimeParsed}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link key={post.id} href={`/blogs/${post.slug}`} className="text-gray-900 dark:text-gray-100 hover:text-mustard-800">{post.title}</Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {post.tagList.map((tag) => (
                                <span key={tag} className="mr-3 text-sm font-medium uppercase text-chartreuse-yellow-600 cursor-default">{tag}</span>
                                // @todo: get around to making a tags page
                                // <Link key={tag}
                                //       className="mr-3 text-sm font-medium uppercase text-chartreuse-yellow-600 hover:text-chartreuse-yellow-800 dark:hover:text-chartreuse-yellow-400"
                                //       href={`/tags/${tag}`}>{tag}</Link>
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">{post.description}</div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            className="text-chartreuse-yellow-600 hover:text-chartreuse-yellow-800 dark:text-chartreuse-yellow dark:hover:text-chartreuse-yellow-400"
                            aria-label={`Read &quot;${post.title}&quot;`} href={`/blogs/${post.slug}`}>Read more →</Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page