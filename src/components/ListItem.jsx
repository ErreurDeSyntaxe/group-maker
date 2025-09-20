import { useNames } from '../contexts/NamesContext';
import styles from './ListItem.module.css';

function ListItem({ children }) {
  const { dispatch, absentees } = useNames();

  return (
    <li
      className={`${styles.item} ${
        absentees.includes(children) ? styles.absent : ''
      }`}
      onClick={() => dispatch({ type: 'toggleAbsentee', payload: children })}
    >
      {children}
    </li>
  );
}

export default ListItem;
