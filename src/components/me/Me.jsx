
import styles from './Me.module.css'
import MeImg from '../../assets/me/heroImage.png';
export const Me = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I,m ziblyy</h1>
      <p className={styles.description}>
        I'm a full-stack developer  using React,angular,
        NodeJS and Nest js. Reach out if you would like to earn more!
      </p>
      <a href="mailto:nkshibili17@gmail.com" className={styles.contactBtn}>
        Contact Me
      </a>
    </div>
    <img
  src={MeImg}
  alt=" me"
  className={styles.meImg}
/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>
  )
   
}

