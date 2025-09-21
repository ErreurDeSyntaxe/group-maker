import { Link } from 'react-router-dom';
import dieIcon from '../assets/dice-outline.svg';
import styles from './Header.module.css';
import { useNames } from '../contexts/NamesContext';

function Header() {
  const { dispatch } = useNames();

  return (
    <header className={styles.header}>
      <Link
        to="/"
        className={styles.link}
        onClick={() => dispatch({ type: 'reset', payload: null })}
      >
        <img
          className={styles.dieIcon}
          src={dieIcon}
          alt="The outline of a six-sided die"
        />
        <h1 className={styles.headerText}>Group Maker</h1>
      </Link>
    </header>
  );
}

export default Header;
