import { useNames } from '../contexts/NamesContext';
import ListItem from './ListItem';
import styles from './NameList.module.css';

function NameList() {
  const { names, currentGroup } = useNames();
  if (currentGroup === null) return;

  return (
    <ul className={styles.list}>
      {names.map((firstName, i) => (
        <ListItem key={i}>{firstName}</ListItem>
      ))}
    </ul>
  );
}

export default NameList;
