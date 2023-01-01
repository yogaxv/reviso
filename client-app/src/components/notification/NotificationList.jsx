import React, { useRef } from 'react';
import { useNotificationListStyles } from '../../assets/styles';
import { defaultNotifications } from '../../data';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

function NotificationList() {
  const classes = useNotificationListStyles();
  const listContainerRef = useRef();

  return (
    <Grid className={classes.listContainer} container>
      {defaultNotifications.map((notification) => {
        const isLike = notification.type === 'like';
        const isFollow = notification.type === 'follow';

        return (
          <Grid
            ref={listContainerRef}
            key={notification.id}
            item
            className={classes.listItem}
          >
            <div className={classes.listItemWrapper}>
              <div className={classes.avatarWrapper}>
                <Avatar
                  src={notification.user.profile_image}
                  alt="User avatar"
                />
              </div>
              <div className={classes.nameWrapper}>
                <Link to={`/${notification.user.username}`}>
                  <Typography variant="body1">
                    {notification.user.username}
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.typography}
                >
                  {isLike && 'liked your photo. 4d'}
                  {isFollow && 'started following you. 5d'}
                </Typography>
              </div>
              <div>
                {isLike && (
                  <Link to={`/p/${notification.post.id}`}>
                    <Avatar src={notification.post.media} alt="Post cover" />
                  </Link>
                )}
              </div>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default NotificationList;