import styles from '../styles/TermsAndCondition.module.css'
import ic_close from '../public/assets/ic_close.svg'
import ic_logo from '../public/assets/ic_logo.svg'
import Image from 'next/image'
const TermsAndCondition = () => {
  return(
    <div className = {styles.mainDiv}>
      <div className = {styles.overlay}>
        <div className = {styles.images}>
        <div className= {styles.close}>
        <Image src = {ic_close} alt = "close" className = {styles.ic_close}/>
        </div>
        <div>
        <Image src = {ic_logo} alt = "logo"  className = {styles.ic_logo} />
        </div>
        </div>

      </div>
      </div>
  )
}

export default TermsAndCondition