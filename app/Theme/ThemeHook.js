import {useContext} from 'react';
import ThemeContext from './ThemeContext';

const useTheme = () => {
  const {theme, changeTheme, scheme} = useContext(ThemeContext);
  return {...theme, changeTheme, scheme};
};

export default useTheme;
