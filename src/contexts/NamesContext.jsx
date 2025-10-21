import { createContext, useContext, useReducer } from 'react';
import names from '../data/names.json';

const NamesContext = createContext();

const initialState = {
  teachers: Object.keys(names),
  currentTeacher: null,
  currentGroup: null,
  names: [],
  groups: [],
  absentees: [],
  teamSize: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'setGroup':
      return {
        ...state,
        currentGroup: action.payload,
        names: state.names[state.groups.indexOf(action.payload)],
      };

    case 'setTeacher':
      return {
        ...state,
        currentTeacher: action.payload,
        groups: names[action.payload].groups.map((g) => g.groupName),
        names: names[action.payload].groups.map((g) => g.studentNames),
      };

    case 'toggleAbsentee':
      if (state.absentees.includes(action.payload)) {
        return {
          ...state,
          absentees: state.absentees.filter((name) => name !== action.payload),
        };
      }
      return {
        ...state,
        absentees: [...state.absentees, action.payload],
      };

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
  const {
    names,
    groups,
    currentGroup,
    absentees,
    teamSize,
    teachers,
    currentTeacher,
  } = state;

  return (
    <NamesContext.Provider
      value={{
        names,
        groups,
        currentGroup,
        absentees,
        teamSize,
        dispatch,
        teachers,
        currentTeacher,
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
