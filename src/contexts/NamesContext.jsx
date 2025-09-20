import { createContext, useContext, useReducer } from 'react';
import nameLists from '../data/nameLists.json';

const NamesContext = createContext();

const initialState = {
  nameLists: nameLists,
  groups: nameLists.groups.map((group) => group.groupName),
  currentGroup: null,
  absentees: [],
  teamSize: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setGroup':
      return {
        ...state,
        currentGroup: action.payload,
      };
    case 'toggleAbsentee':
      if (state.absentees.includes(action.payload)) {
        return {
          ...state,
          absentees: state.absentees.filter((name) => name !== action.payload),
        };
      }
      return { ...state, absentees: [...state.absentees, action.payload] };

    case 'setSize':
      return {
        ...state,
        teamSize: action.payload,
      };

    case 'reset':
      return initialState;

    default:
      return state;
  }
}

function NamesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { nameLists, groups, currentGroup, absentees, teamSize } = state;

  return (
    <NamesContext.Provider
      value={{
        nameLists,
        groups,
        currentGroup,
        absentees,
        teamSize,
        dispatch,
      }}
    >
      {children}
    </NamesContext.Provider>
  );
}

function useNames() {
  const context = useContext(NamesContext);
  if (context === undefined) {
    throw new Error('useNames must be used within a NamesProvider');
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { NamesProvider, useNames };
