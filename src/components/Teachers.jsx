import { useNames } from '../contexts/NamesContext';
import styles from './Teachers.module.css';

function Teachers() {
  const { teachers, dispatch } = useNames();

  return (
    <div className={styles.teachers}>
      {teachers.map((t) => (
        <div
          className={styles.teacher}
          key={t}
          onClick={() => dispatch({ type: 'setTeacher', payload: t })}
        >
          {t}
        </div>
      ))}
    </div>
  );
}

export default Teachers;
