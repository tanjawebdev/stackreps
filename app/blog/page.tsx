import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="container">
      <h1>My Blog</h1>
      <BlogPosts />
    </section>
  )
}
