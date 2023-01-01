import React from 'react';
import * as styles from '../../assets/styles'
import SEO from './Seo';
import Navbar from '../shared/Navbar';
import BottomNavbar from './BottomNavbar';

function Layout({ minimalNavbar = false, children, title, marginTop = 60 }) {
  const classes = styles.useLayoutStyles();

  return (
    <section>
      <SEO title={title} />
      <Navbar minimalNavbar={minimalNavbar} />
      <main className={classes.main} style={{ marginTop }}>
        <section className={classes.childrenWrapper}>
          <div className={classes.children}>{children}</div>
        </section>
      </main>
      
      <BottomNavbar />
    </section>
  );
}

export default Layout;