import {FunctionComponent} from "react";
import Image from "next/image";
import {Blog} from "@/./interfaces/Blog";
import Link from "next/link";

type Props = {
  blog: Blog
}

const BlogHeader: FunctionComponent<Props> = ({blog}) => {
  return (
    <div className="blog-detail-header">

      <div>
        {blog.datetimeParsed && (
          <p className="text-xl text-gray-500 py-2">
            {blog.datetimeParsed}
          </p>
        )}
        <h1 className="text-4xl font-bold">{blog.title}</h1>
      </div>

      <div className="relative mt-4 flex items-center gap-x-4">
        <div className="h-10 w-10 rounded-full bg-gray-50 relative">
          <Image priority layout={`fill`} objectFit={`cover`} src={blog.authorImage} alt="" className={`rounded-full`}/>
        </div>
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <Link href={blog.authorUrl}><span className="absolute inset-0"/>{blog.author}</Link>
          </p>
          <p className="text-gray-600">Crew Member</p>
        </div>
      </div>

      {blog.coverImage && (
        <div className="my-10">
          <div className="h-96 bg-black mx-auto w-full relative">
            <Image priority layout="fill" objectFit="cover" src={blog.coverImage} alt="" className={`rounded-xl`}/>
          </div>
        </div>
      )}

    </div>
  )
}

export default BlogHeader;