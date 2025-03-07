import Link from 'next/link'
import styles from '../styles/Posts.module.scss'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className={styles.blogpost}>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="link"
            href={`/blog/${post.slug}`}
          >
            <div>
              <p>
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p>
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
