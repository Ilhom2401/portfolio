import React from 'react';
import { Link } from 'react-router-dom';

const References = () => (
  <div className="references">
    <div className="link-to" id="references" />
    <div className="title">
      <Link to="/contact">
        <h3>So&apos;rov bo&apos;yicha malumotlar 👉</h3>
      </Link>
    </div>
  </div>
);

export default References;
