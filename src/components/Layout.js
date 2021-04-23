import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  makeStyles,
  Avatar,
} from '@material-ui/core';
import { SubjectOutlined, AddCircleOutlineOutlined } from '@material-ui/icons';
import { format } from 'date-fns';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    active: {
      backgroundColor: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/',
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlineOutlined color='secondary' />,
      path: '/create',
    },
  ];

  return (
    <div className={classes.root}>
      {/* App Bar */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>Murtaza</Typography>
          <Avatar className={classes.avatar}>M</Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        className={classes.drawer}
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5' className={classes.title}>
            Quick Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : ''}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
