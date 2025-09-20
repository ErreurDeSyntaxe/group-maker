import { useNames } from '../contexts/NamesContext';
import ListItem from './ListItem';
import styles from './NameList.module.css';

function NameList() {
  const { nameLists, currentGroup } = useNames();
  if (currentGroup === null) return;

  const names = nameLists.groups.filter(
    (group) => group.groupName === currentGroup
  )[0].studentNames;

  return (
    <ul className={styles.list}>
      {names.map((firstName, i) => (
        <ListItem key={i}>{firstName}</ListItem>
      ))}
    </ul>
  );
}

export default NameList;
