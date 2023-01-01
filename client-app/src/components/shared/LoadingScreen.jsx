import React from 'react';
import { useLoadingScreenStyles } from '../../assets/styles'
import { LogoLoadingIcon } from '../../assets/icons';

function LoadingScreen() {
  const classes = useLoadingScreenStyles();

  return (
    <section className={classes.section}>
      <span>
        <LogoLoadingIcon />
      </span>
    </section>
  );
}

export default LoadingScreen;