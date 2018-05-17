import React from 'react';
import { Link } from 'react-router';

export default () => {
    return (
      <div>
        <div className="hero">

          <div className="nav">

            <div className="navdiv-a">

              <a href="/" className="brand-w-nav-brand" >
                <h2 className="heading-main">Shrtnr.org</h2>
              </a>
            </div>

            <div className="navdiv-b w-clearfix">
              <a href="https://www.unicef.org.nz/appeals" className="link-block w-inline-block" target="_blank">
                <div className="text-block-3">Donate to UNICEF</div>
              </a>
            </div>

          </div>

          <div className="hero-container">
            <h1 className="heading-2">A URL/Link shortener with a cause</h1>
            <div className="text-block">Shrtnr is a completely free URL/Link shortener with real-time engagement stats, created with a&nbsp;cause in mind, and built as a side project by UNICEF to raise awareness&nbsp;about the issues children face around the world</div>
            <div className="button-container">
              <div className="button-a w-clearfix">
                <Link className="button-1 w-button" to="/signup">Create an Account</Link>
              </div>
              <div className="button-b w-clearfix">
                <Link className="button-2 w-button" to="/login">Already have an account?</Link>
              </div>
            </div>
            <div className="div-block">
              <div><a href="https://data.unicef.org/wp-content/uploads/2018/05/JME-2018-brochure-.pdf" target="_blank" className="link">New data on child stunting, overweight, wasting and severe wasting at the country, regional and global levels</a></div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="kids-image" />
          <div className="text-block-2"><a href="mailto:hello@shrtnr.org">hello@shrtnr.org</a></div>
        </div>
      </div>
    );
};
