import { useNavigate } from 'react-router-dom';
import { useNames } from '../contexts/NamesContext';
import styles from './Group.module.css';

function Group({ children }) {
  const { dispatch } = useNames();

  const navigate = useNavigate();

  return (
    <div
      className={`${styles.group} ${
        children.startsWith('G') ? `${styles.double}` : ''
      }`}
      onClick={() => {
        dispatch({ type: 'setGroup', payload: children });
        navigate('/generator');
      }}
    >
      {children}
    </div>
  );
}

export default Group;
