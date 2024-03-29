import React from 'react';
import css from './HomePage.module.css';
import image from '../../components/image/block.png';
import Registration from '../../components/Registration/Registration';

const HomePage = () => {
  return (
    <div className={css.ContainerHome}>
      <div className={css.Sec}>
        *
        <div className={css.TextInf}>
          <h1 className={css.Zag}>
            Unlock your potential with the best{' '}
            <span className={css.SpanZal}>language</span> tutors
          </h1>
          <p className={css.Embark}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button type="button" className={css.ButtonStarted}>
            Get started
          </button>
        </div>
        <div className={css.ImgHome}>
          <img src={image} alt="img" className={css.Img} />
        </div>
        <div className={css.Experience}>
          <div className={css.divExp}>
            <h2 className={css.H2}>32,000 +</h2>
            <span className={css.Span}>Experienced tutors</span>
          </div>
          <div className={css.divExp}>
            <h2 className={css.H2}>300,000 +</h2>
            <span className={css.Span}>5-star tutor reviews</span>
          </div>
          <div className={css.divExp}>
            <h2 className={css.H2}>120 +</h2>
            <span className={css.Span}>Subjects taught</span>
          </div>
          <div className={css.divExp}>
            <h2 className={css.H2}>200 +</h2>
            <span>Tutor nationalities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
