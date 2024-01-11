import { useContext, useState, useEffect } from 'react';

import { ThemeContext, ThemeContextType } from '@app/context/ThemeContext';

import classes from './theme.module.css';

const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
  const [checked, setChecked] = useState<boolean>(
    theme === 'light' ? false : true
  );

  const themeToggle = () => {
    setTheme(checked ? 'light' : 'dark');
    setChecked(!checked);
  };

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', theme);
    localStorage.setItem('theme', theme);
  }, [theme, checked]);

  return (
    <div className={classes.wrapper}>
      Light
      <label className={classes.switch}>
        <input type="checkbox" onChange={themeToggle} checked={checked} />
        <span className={classes.slider}></span>
      </label>
      Dark
    </div>
  );
};
export default Theme;
