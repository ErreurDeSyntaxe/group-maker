import { useNames } from '../contexts/NamesContext';
import BackButton from './BackButton';

import Group from './Group';
import styles from './Groups.module.css';

function Groups() {
  const { groups } = useNames();

  return (
    <div className={styles.groups}>
      {groups.map((group) => (
        <Group key={group}>{group}</Group>
      ))}
      <BackButton />
    </div>
  );
}

export default Groups;
