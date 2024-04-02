import styles from './Navigation.module.css'

type NavigationProps = {
  currentPage: number
  onSwitchPage: (page: number) => void
}

const Navigation = ({
  currentPage,
  onSwitchPage
}: NavigationProps) => {

  const prevPage = () => {
    if (currentPage > 0) onSwitchPage(currentPage - 1)
  }

  const nextPage = () => {
    onSwitchPage(currentPage + 1)
  }

  return (
    <div className={styles.navigation}>
        <button onClick={prevPage} disabled={currentPage === 0}>Prev</button>
        <p className={styles.pageDisplay}>Page {currentPage}</p>
        <button onClick={nextPage}>Next</button>
      </div>
  )
}

export default Navigation