import { useNames } from '../contexts/NamesContext';
import styles from './Teams.module.css';
import Team from './Team';

function shuffleArray(array) {
  for (let i = array?.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Teams() {
  const { currentGroup, absentees, nameLists, teamSize } = useNames();
  if (teamSize === null) return;

  const names = nameLists.groups
    .filter((group) => group.groupName === currentGroup)[0]
    ?.studentNames.filter((name) => !absentees.includes(name));

  const shuffledNames = shuffleArray(names);

  const teams = [];
  for (let i = 0; i < shuffledNames?.length; i += teamSize) {
    teams.push(shuffledNames.slice(i, i + teamSize));
  }

  return (
    <div className={styles.teams}>
      {teams.map((team) => (
        <Team>{team}</Team>
      ))}
    </div>
  );
}

export default Teams;
