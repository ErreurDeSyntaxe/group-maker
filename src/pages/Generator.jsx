import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNames } from '../contexts/NamesContext';

import styles from './Generator.module.css';

import BackButton from '../components/BackButton';
import Button from '../components/Button';
import NameList from '../components/NameList';
import Teams from '../components/Teams';

function Generator() {
  const { currentGroup, dispatch } = useNames();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentGroup === null) {
      navigate('/');
    }
  }, [currentGroup, navigate]);

  if (currentGroup === null) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <BackButton />
        <Button onClick={() => dispatch({ type: 'setSize', payload: 1 })}>
          1 &times; 👶
        </Button>
        <Button onClick={() => dispatch({ type: 'setSize', payload: 2 })}>
          2 &times; 👶
        </Button>
        <Button onClick={() => dispatch({ type: 'setSize', payload: 3 })}>
          3 &times; 👶
        </Button>
        <Button onClick={() => dispatch({ type: 'setSize', payload: 4 })}>
          4 &times; 👶
        </Button>
      </div>

      <div className={styles.display}>
        <NameList />
        <Teams />
      </div>
    </div>
  );
}

export default Generator;
