import styles from './Team.module.css';

function Team({ children }) {
  return (
    <div className={styles.team}>
      {children.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
}

export default Team;
