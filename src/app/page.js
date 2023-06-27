import Link from 'next/link'
import styles from '../styles/page.module.css'

export default function page() {


  return (
    <div className={styles.Home}>
      <div className={styles.flexcontainer}>
      <Link className={styles.flexitem} href='/BCA'><div >B-tech <br/> CSE / MECHANICAL / CIVIL / EC</div></Link>
      <Link className={styles.flexitem} href='/BCA'><div> BCA AI/DA </div></Link>
      <Link className={styles.flexitem} href='/BCA'><div> BCA AI/DA </div></Link>
      <Link className={styles.flexitem} href='/BCA'><div> BCA AI/DA </div></Link>
      <Link className={styles.flexitem} href='/BCA'><div> BCA AI/DA </div></Link>
      <Link className={styles.flexitem} href='/BCA'><div> BCA AI/DA </div></Link>
      <Link className={styles.flexitem} href='/BCA'><div> BCA AI/DA </div></Link>
      <Link className={styles.flexitem} href='/BCA'><div> BCA AI/DA </div></Link>
      <Link className={styles.flexitem} href='/BCA'><div> BCA AI/DA </div></Link>
      <Link className={styles.flexitem} href='/BCA'><div> BCA AI/DA </div></Link>
      </div>
    </div>
  )
}
