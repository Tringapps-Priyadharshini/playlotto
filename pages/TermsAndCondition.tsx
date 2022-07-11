import styles from '../styles/TermsAndCondition.module.css'
import ic_close from '../public/assets/ic_close.svg'
import ic_logo from '../public/assets/ic_logo.svg'
import Image from 'next/image'
const TermsAndCondition = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.overlay}>
        <div className={styles.images}>
          <div className={styles.close}>
            <Image src={ic_close} />
          </div>
          <div className={styles.logo}>
            <Image src={ic_logo} alt="logo" className={styles.ic_logo} />
          </div>
        </div>
        <div className={styles.termsCondition}>
        <div className={styles.title}>
          <span>Terms & Privacy Policy</span>
        </div>
        <div className={styles.effectiveJuly}>
          Effective as of: July 15, 2022
          <br /><br />

          Please read the following terms and conditions carefully. By using and accessing the Site, you acknowledge that you have read these <b className = {styles.boldWords}>Terms of Use</b> (“Terms”) and agree to abide by them and to the terms and conditions of PlayLotto’s <b className = {styles.boldWords}>Privacy Policy </b> (“Policy”) hereby incorporated by reference, which details the ways in which we and other parties might use personal information that belongs to you. If you do not agree to these Terms or those in PlayLotto’s <b className = {styles.boldWords}> Privacy Policy </b>, or Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
        </div>
        <div className={styles.partnerServices}>
          PARTNER SERVICES<br />
          <div className={styles.content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Ipsum is simply dummy text.
            <br /><br />

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
            <br /><br />
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndCondition;