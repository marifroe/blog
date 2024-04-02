import { useEffect, useRef, useState } from 'react'
import styles from './Overview.module.css'
import PostList from '../PostList/PostList'
import Navigation from '../Navigation/Navigation'

type OverviewProps = {
  title: string
}

export interface PostData {
  title: string
  body: string
}

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const Overview = (props: OverviewProps) => {

  const [ error, setError ]: any | null = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ posts, setPosts ] = useState<PostData[]>([])
  const [ page, setPage ] = useState(0)
  
  const abortControllerRef = useRef<AbortController | null>(null)

  const handlePageSwitch = (page: number) => {
    setPage(page)
  }

  useEffect(() => {
    const fetchPosts = () => {

      abortControllerRef.current?.abort()
      abortControllerRef.current = new AbortController()

      setIsLoading(true)

      fetch(`${BASE_URL}/posts?page=${page}`, {
        signal: abortControllerRef.current?.signal,
      })
        .then(response => response.json())
        .then(json => {
          const posts = json as PostData[]
          setPosts(posts)
          setError(null)
        })
        .catch(error => {
          if (error.name === "AbortError") {
            console.log('Aborted loading')
            return
          }
          setError(error)
          console.log(error)
        })
        .finally(() => setIsLoading(false))
    }

    fetchPosts()
  }, [ page ])

  if (isLoading) {
    return 
  }

  if (error) {
    return <div>Something went wrong! Please try again.</div>
  }
  
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <Navigation currentPage={page} onSwitchPage={page => handlePageSwitch(page)} />
      {isLoading
        ? <div>Loading...</div>
        : <PostList posts={posts} />
      }
    </>
  )
}

export default Overview