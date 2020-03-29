/*import React from "react";
import gql from "graphql-tag";
import { ChildDataProps, graphql } from "@apollo/react-hoc";

const HERO_QUERY = gql`
query Character($id: ID!) {
 character(id: $id) {
      id
      name
    }
  }
`;
type Character = {
  name: string;
  id: number;
};

type Response = {
  character: Character;
};

type Variables = {
  id: number;
};

type ChildProps = ChildDataProps<{}, Response, Variables>;
//Typing Higher Order Components

const withCharacter = graphql<{}, Response, Variables, ChildProps>(HERO_QUERY, {
  options: () => ({
    variables: { id:4 }
  })
});

export default withCharacter(({ data: { loading,character, error } }) => {
  if (loading) return <>Loading...</>;
  if (error) return <>{`Error! ${error.message}`}</>;
  return (
    <div>{JSON.stringify(character)}</div>
  );
});*/



import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Linka from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardList from './DashboardList';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Projects from './projects';
import Footer from '../Home/Footer';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Scrollbars } from 'react-custom-scrollbars';
import CardMedia from '@material-ui/core/CardMedia';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  footer: {
    bottom: 0
  },
  media: {
    height: 60,
    width: '100%',
    margin: 10,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center center'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    }
  },
  /*appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },*/

  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    /*width: drawerWidth,
    flexShrink: 0,*/
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    //position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    //height: '100vh',
    //overflow: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    }
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    minHeight: 'calc(100vh - 153px)'
  },
  papers: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    /*padding: '20px',
    boxShadow: '0 2px 5px 0 rgba(51,51,79,.07)',
    backgroundColor: '#fff',
    borderRadius: '6px'*/
  },
  fixedHeight: {
    height: '100%',
  },
  box: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: 'white',
    textDecoration: 'none'
  },
  men: {
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
  }
}));
function allLinks() {
  return {
    colors: {
      primary: '#e70000',
      secondary: '#333333',
      buttontext: '#ffffff',
      linkcard: 'red',
      cardtext: '#959090',
      linkheader: '#ffffff',

      linkfooter: '#696969'
    },
    header: [{
      href: '/',
      external: false,
      text: 'Home',
    },
    {
      href: 'https://google.com',
      external: true,
      text: 'External',
    },
    {
      href: '/stepper',
      external: false,
      text: 'Stepper',
    }],
    drawer: [{
      subheader: 'Vodafone',
      items: [{
        href: '/',
        external: false,
        text: 'Home'
      },
      {
        href: '/stepper',
        external: false,
        text: 'Stepper'
      },
      {
        href: '/settings',
        external: false,
        text: 'Settings'
      },
      {
        href: 'https://google.com',
        external: true,
        text: 'Orders'
      }]
    }, {
      subheader: 'Router settings',
      items: [{
        href: '/',
        external: false,
        text: 'ZTE'
      },
      {
        href: '/stepper',
        external: false,
        text: 'Huawei'
      },
      {
        href: '/solver',
        external: false,
        text: 'Vdsl'
      }]
    }, {
      subheader: 'Troubleshooting Internet',
      items: [{
        href: '/',
        external: false,
        text: 'Internet Not Working'
      },
      {
        href: '/stepper',
        external: false,
        text: 'Monitor bandwidth usage'
      },
      {
        href: '/solver',
        external: false,
        text: 'Limit internet speed'
      }]
    }

    ],
    footer: {
      copyright: 'Copyright © [Your Website](https://google.com) 2020.',
      linkstext: [{
        size: 4,
        title: 'Services',
        links: [
          {
            href: '/',
            external: false,
            text: 'Home',
          },
          {
            href: 'https://google.com',
            external: true,
            text: 'External',
          },
          {
            href: '/stepper',
            external: false,
            text: 'Stepper',
          }]
      },
      {
        size: 4,
        title: 'Packages',
        links: [
          {
            href: '/',
            external: false,
            text: 'Home',
          },
          {
            href: 'https://google.com',
            external: true,
            text: 'External',
          },
          {
            href: '/stepper',
            external: false,
            text: 'Stepper',
          }]
      },
      {
        size: 4,
        title: 'Services',
        links: [
          {
            href: '/',
            external: false,
            text: 'Home',
          },
          {
            href: 'https://google.com',
            external: true,
            text: 'External',
          },
          {
            href: '/stepper',
            external: false,
            text: 'Stepper',
          }]
      }

      ]
    }
  }
}
export default function Project() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  /*const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };*/
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const links = allLinks();
  const colors = allLinks().colors;
  const muiTheme = createMuiTheme({
    palette: {
      primary: {
        main: colors.primary
      },
      secondary: {
        main: colors.secondary
      },
      label: {
        color: colors.secondary
      },
      background: {
        default: "#000000"
      }
    },
    typography: {
      h1: {
        color: colors.secondary
      },
      h2: {
        color: colors.secondary
      },
      h3: {
        color: colors.secondary
      },
      h5: {
        color: colors.primary
      },
    },
    overrides: {
      MuiButton: {
        containedPrimary: {
          color: colors.buttontext
        }
      },
      MuiStepLabel: { //for text only
        label: {
          color: '#000000'
        },
      },
      MuiStepIcon: {
        root: {
          '&$active': {
            color: colors.primary,
          },
          '&$completed': {
            color: colors.primary,
          },
        },
      },
    }
  });
  const drawer = (
    <Scrollbars autoHide universal autoHideDuration={200}>
      <div className={classes.toolbarIcon}>
        <Container className={classes.box}>
          <CardMedia
            className={classes.media}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png"
            title="Vodafone"
          />
        </Container>
      </div>

      <DashboardList />
    </Scrollbars>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{ background: links.colors.primary }} position="fixed" className={clsx(classes.appBar)}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            color="inherit"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ color: links.colors.linkheader }} className={classes.men}>

            <Button component={Link} to={'/dashboard'} size="small" color="inherit">
              {'Dashboard'}
            </Button>
            <Button component={Link} to={'/dashboard/feedback'} size="small" color="inherit">
              {'Feedback'}
            </Button>
            <Button component={Link} to={'/dashboard/help'} size="small" color="inherit">
              {'Help'}
            </Button>
          </Typography>
          <IconButton aria-controls="avatar-menu" onClick={handleClick} color="inherit">
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          </IconButton>
          <Menu
            id="avatar-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>

        </Hidden>
        <Hidden xsDown implementation="css">

          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>

        <div className={classes.appBarSpacer} />
        <MuiThemeProvider theme={muiTheme}>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={12}>
                <Route
                  path='/dashboard'
                  exact
                  render={(routeProps) => <Projects {...routeProps} colors={links.colors} />}
                />
                <Route
                  path='/dashboard/help'
                  render={(routeProps) => <Projects {...routeProps} colors={links.colors} />}
                />
                <Route
                  path='/dashboard/profile'
                  render={(routeProps) => <Projects {...routeProps} colors={links.colors} />}
                />
                <Route
                  path='/dashboard/feedback'
                  render={(routeProps) => <Projects {...routeProps} colors={links.colors} />}
                />
                <Route
                  path='/dashboard/subscription'
                  render={(routeProps) => <Projects {...routeProps} colors={links.colors} />}
                />
                <Route
                  path='/dashboard/project/:project'
                  render={(routeProps) => <Projects {...routeProps} colors={links.colors} />}
                />
                {/*<Route
                  path='/vodafone/dashboard'
                  exact
                  render={(routeProps) => <Home {...routeProps} colors={links.colors} />}
                />
                <Route path="/vodafone/team" component={Orders} />
                
                <Route
                  path='/settings'
                  exact
                  render={(routeProps) => <ControlledExpansionPanels {...routeProps} colors={links.colors} />}
                />*/}
              </Grid>
            </Grid>

          </Container>


        </MuiThemeProvider>
        <div className={classes.footer}>
          <Footer links={links.footer} />
        </div>
      </main>
    </div>
  );
}