import styles from './Post.module.css'

type PostProps = {
  title: string
  content: string
}

const Post = (props: PostProps) => {
  return (
    <div className={styles.post}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

export default Post