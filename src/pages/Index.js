import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Ushbu sayt haqida</Link></h2>
          <p>
            Chiroyli dizaynga, responsivlik xususiyatlariga ega hamda
            JavaScript ning React frameworkidan foydalangan holda yasalgan.
          </p>
        </div>
      </header>
      <p> Veb-saytimga xush kelibsiz.  Men haqimda ko&apos;proq malumotlarga ega bo&apos;lishingiz mumkin. Masalan :  <Link to="/about">men haqimda</Link>,
        yoki rezyume bilan tanishish uchun {' '}
        <Link to="/resume">rezyume</Link>, {' '}
        proyektlarni ko&apos;rish uchun {' '}
        <Link to="/projects">proyektlar</Link>, {' '}
        statistika uchun <Link to="/stats">sayt statistikasi</Link>, {' '}
        aloqa uchun esa <Link to="/contact">aloqa</Link> sahifalariga o&apos;tishingiz mumkin
      </p>
      <p> Source available <a href="https://github.com/">here</a>.</p>
    </article>
  </Main>
);

export default Index;
