import Theme from '@shared/ui/themeSwitcher/Theme';
import classes from './header.module.css';

export const Header = () => {
  return (
    <header>
      <div className={classes.wrapper}>
        <div className={classes.title}>The Word</div>
        <Theme />
      </div>
    </header>
  );
};
