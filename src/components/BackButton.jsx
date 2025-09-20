import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { useNames } from '../contexts/NamesContext';

function BackButton() {
  const navigate = useNavigate();
  const { dispatch } = useNames();

  return (
    <Button
      onClick={() => {
        navigate(-1);
        dispatch({ type: 'reset', payload: null });
      }}
      type="back"
    >
      &ensp;&larr;&ensp;
    </Button>
  );
}

export default BackButton;
