import React from 'react';
import { useNavbarStyles } from '../../assets/styles';
import Typography from '@mui/material/Typography';

function NotificationTooltip() {
  const classes = useNavbarStyles();

  return (
    <div className={classes.tooltipContainer}>
      <div className={classes.tooltip}>
        {/* Span is an icon itself */}
        <span aria-label="Followers" className={classes.followers} />
        {/* The count */}
        <Typography>1</Typography>
      </div>
      <div className={classes.tooltip}>
        <span aria-label="Likes" className={classes.likes} />
        <Typography>1</Typography>
      </div>
    </div>
  );
}

export default NotificationTooltip;