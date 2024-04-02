import { PostData } from '../Overview/Overview'
import Post from '../Post/Post'
import styles from './PostList.module.css'

type PostListProps = {
  posts: PostData[]
}

const PostList = ({
  posts
}: PostListProps) => {
  return (
    <div className={styles.container}>
      {
        posts.length > 0
        ? posts.map(post => {
          return <Post key={post.title} title={post.title} content={post.body} />
        })
        : <div>No posts yet</div>
      }
    </div>
  )
}

export default PostList