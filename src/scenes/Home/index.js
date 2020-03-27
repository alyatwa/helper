/*import React,{ Component } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const SUBSCRIPTIONS_QUERY = gql`
  query Character($id: ID!) {
   character(id: $id) {
        id
        name
      }
    }
`;

 
 const Home = () => {
  const { data, loading, error } = useQuery(SUBSCRIPTIONS_QUERY, {
    variables: { "id":5 }
  });
  if (loading) return <>Loading...</>;
  if (error) return <>{`Error! ${error.message}`}</>;
  return (
    <div>{JSON.stringify(data.character)}</div>
  );
 }

 export default Home;*/


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
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NestedList from './DrawerList';
import VerticalLinearStepper from './Stepper';
import sharedStyles from "../../components/sharedStyles";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Orders from './Orders';
import Solver from './Solver';
import ControlledExpansionPanels from './Settings';
import Footer from './Footer';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Home from './Home';
import MenuIcon from '@material-ui/icons/Menu';
import { Scrollbars } from 'react-custom-scrollbars';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  ...sharedStyles,

  root: {
    display: 'flex'
  },
  footer: {
    bottom: 0
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
        href: '/solver',
        external: false,
        text: 'Solver'
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
export default function AppHome() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const links = allLinks();
  const drawer = (
    <Scrollbars autoHide universal autoHideDuration={200}>
      <div className={classes.toolbarIcon}>
        <Container className={classes.box}>
          <ShoppingCartIcon />
        </Container>
      </div>
      
      <NestedList links={links.drawer} />
      </Scrollbars>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.men}>
            {links.header.map((link, index) => (
              <>
                {link.external ?
                  <Button href={link.href} size="small" color="inherit">
                    {link.text}
                  </Button>
                  :
                  <Button component={Link} to={link.href} size="small" color="inherit">
                    {link.text}
                  </Button>
                }</>))}

          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
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
      {/*<Drawer
        className={classes.drawer}
        variant="temporary"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        classes={{
          paper: classes.drawerPaper
        }}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <div className={classes.toolbarIcon}>
          <Container className={classes.box}>
            <ShoppingCartIcon />
          </Container>

        </div>
        <Divider />
        <NestedList />
      </Drawer>*/}
      <main className={classes.content}>

        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/orders" component={Orders} />
                <Route path="/solver" component={Solver} />
                <Route path="/stepper" component={VerticalLinearStepper} />
                <Route path="/settings" component={ControlledExpansionPanels} />
              </Switch>
            </Grid>
          </Grid>
          
        </Container>
        <div className={classes.footer}>
          <Footer links={links.footer} />
        </div>
      </main>
    </div>
  );
}