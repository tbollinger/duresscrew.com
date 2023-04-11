import React from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import {vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism";

interface BlogPostProps {
  content: string;
}


type CodeBlockProps = {
  language: string
  value: string
}

const CodeBlock = ({ language='shell', value }: CodeBlockProps) => {
  return (
    <div className="code-block">
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {value}
      </SyntaxHighlighter>
    </div>
  )
}

const BlogPost = ({content}: BlogPostProps) => {
  console.log(content)
  // @ts-ignore
  return (
    <ReactMarkdown
      className="prose prose-lg"
      renderers={{
        code: CodeBlock,
      }}
      components={{
        h1: ({node, ...props}) => <h1 className="text-4xl py-6" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-3xl py-6" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-2xl py-6" {...props} />,
        h4: ({node, ...props}) => <h4 className="text-xl py-6" {...props} />,
        h5: ({node, ...props}) => <h5 className="text-lg py-6" {...props} />,
        h6: ({node, ...props}) => <h6 className="text-base py-6" {...props} />,
        p: ({node, ...props}) => <p className="text-base py-2" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default BlogPost
