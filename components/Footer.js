import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
      Made by Broke <img src="/broke.svg" alt="Broke logo" className={styles.logo} 
        /> for Dads
      </footer>
    </>
  )
}