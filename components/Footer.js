import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
      Made by Broke <img src="/broke.svg" alt="Broke logo" className={styles.logo} 
        /> for Dads<img src="/builtonalgo.png" alt="Dad DAO Quote" class="imagesmall"/>
        
      </footer>
    </>
  )
}