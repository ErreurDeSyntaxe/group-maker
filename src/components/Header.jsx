import { useNavigate } from 'react-router-dom';
import dieIcon from '../assets/dice-outline.svg';
import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.header} onClick={() => navigate('/')}>
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
