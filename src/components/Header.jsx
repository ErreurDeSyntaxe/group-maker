import dieIcon from '../assets/dice-outline.svg';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.dieIcon}
        src={dieIcon}
        alt="The outline of a six-sided die"
      />
      <h1 className={styles.headerText}>Group Maker</h1>
    </header>
  );
}

export default Header;
