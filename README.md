This is a Next.js project.

## Writing a Blog Post
Create a basic markdown post in the `src/app/content` directory. Changes made to this github repo will automatically be deployed to the live site.
You can break the site if you mess up the format, so follow the blog template found at `src/blog-template.md`.
It's pretty straightforward. You can learn more about markdown here: https://www.markdownguide.org/basic-syntax/

## Content
I've implemented the "blog" as a markdown reader.
It'll read any files in the `src/app/content` directory and display them as a blog post.

The `src/app/[slug]/page.tsx` file is a basic "catch-all" because there's something wrong with `src/app/not-found.tsx` not working.

## Getting Started

I've chosen to use `pnpm` as my package manager. You can install it with `npm install -g pnpm`.

```bash
pnpm install
pnpm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Before updating Master branch
Ensure you run `pnpm build` locally so you'll be able to see if Vercel will have any breaking changes.
The pipeline should automatically build and deploy any new changes to master.
General workflow: 
1. Changes made on a local branch during development
2. Run `pnpm build` to ensure they work properly
3. Merged into the "prod-candidate" branch
4. Run `pnpm build` on prod-candidate branch to ensure merge worked well
5. Finally pushed to Master, where Vercel will pull from and update

## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
