import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.main}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.contacts} to="/contacts">
          Home
        </NavLink>
      )}
    </nav>
  );
};
