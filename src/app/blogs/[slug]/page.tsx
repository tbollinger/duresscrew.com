import {NextPage} from "next";
import {ParsedUrlQuery} from "querystring";
import {use} from "react";
import {getBlogBySlug, getBlogs} from "@/./lib/blogs"
import BlogHeader from "./BlogHeader";
// import Navigation from "@/components/Navigation";
import BlogPost from "@/components/BlogPost";
// import Image from "next/image";
import Link from "next/link";

interface Params extends Promise<ParsedUrlQuery> {
  slug: string;
}

type Props = {
  params: Params;
}

const getInitialBlog = async (slug: string) => {
  return getBlogBySlug(slug);
}

const BlogDetail: NextPage<Props> = ({params}) => {
  const blog = use(getInitialBlog(params.slug));

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

      <div className="px-4 sm:px-6 md:px-8">
        <div className="max-w-3xl mx-auto">

          <div className="relative my-4 flex items-center gap-x-4">
            <Link href="/blogs">&lt; Back to Blogs</Link>
          </div>

          <main className={`relative`}>
            <BlogHeader blog={blog}/>
            <article className="relative">
              <BlogPost content={blog.content}/>
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return getBlogs().map(blog => ({
    slug: blog.slug
  }))
}

export default BlogDetail;
