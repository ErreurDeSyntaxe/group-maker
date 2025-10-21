import { useNames } from '../contexts/NamesContext';

import Groups from '../components/Groups';
import Teachers from '../components/Teachers';

function Homepage() {
  const { currentTeacher } = useNames();

  if (!currentTeacher) return <Teachers />;

  return <Groups />;
}

export default Homepage;
