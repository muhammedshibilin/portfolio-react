import { useState } from 'react';
import styles from './Navbar.module.css';
import Lottie from 'react-lottie';
import menuIcon from '../../lotties/menu.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: menuIcon,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <div className={styles.menuBtn} onClick={handleToggle}>
          <Lottie
            options={defaultOptions}
            height={40}
            width={40}
          />
        </div>
        <ul className={`${styles.menuItems} ${isMenuOpen ? styles.menuOpen : styles.menuClosed}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contacts</a></li>
        </ul>
      </div>
    </nav>
  );
};
