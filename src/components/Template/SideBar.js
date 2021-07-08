import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/i1.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ilhomjon</h2>
        <p><a href="mailto:ilhomabdunasimov234@gmail.com">ilhomabdunasimov234@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>Men haqimda</h2>
      <p>Salom mening ismim Ilhomjon.
        Men <a href="https://tuit.uz/">Toshkent Axborot Texnalogiyalari Universitetining</a> 3-kurs talabasiman.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Ko&apos;proq ko&apos;rish</Link> : <Link to="/about" className="button">Men haqimda</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ilhomjon <Link to="/">portfolio.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
