import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import ukraine from '../image/ukraine.jpg';
import sprite from '../image/sprite.svg';
import Registration from 'components/Registration/Registration';
//import { useDispatch } from 'react-redux';

const Header = () => {
  //const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  const handleLearnMore = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; //заборонити прокручування тіла документа
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <section className={css.Header}>
      <div className={css.ContainerHeader}>
        <NavLink to="/" className={css.Logotup}>
          <img src={ukraine} alt="Logo" className={css.logo} />
          <p className={css.LearnLingo}>LearnLingo</p>
        </NavLink>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/teachers">
            Teachers
          </NavLink>
          <NavLink className={css.navLink} to="/favorites">
            Favorites
          </NavLink>
        </nav>
        <div className={css.buttonRegistLog}>
          <svg className={css.Stril} width="18px" height="18px">
            <use href={`${sprite}#icon-log-in-01`}></use>
          </svg>
          <button type="button" className={css.Login}>
            Log in
          </button>
          <button
            type="button"
            className={css.Registration}
            onClick={handleLearnMore}
          >
            Registration
          </button>
          {modalOpen && <Registration closeModal={closeModal} />}
        </div>
      </div>
    </section>
  );
};

export default Header;
