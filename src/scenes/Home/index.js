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
 import Box from '@material-ui/core/Box';
 import AppBar from '@material-ui/core/AppBar';
 import Toolbar from '@material-ui/core/Toolbar';
 import List from '@material-ui/core/List';
 import Typography from '@material-ui/core/Typography';
 import Divider from '@material-ui/core/Divider';
 import IconButton from '@material-ui/core/IconButton';
 import Badge from '@material-ui/core/Badge';
 import Container from '@material-ui/core/Container';
 import Grid from '@material-ui/core/Grid';
 import Paper from '@material-ui/core/Paper';
 import Linka from '@material-ui/core/Link';
 import { Link } from 'react-router-dom';
 import MenuIcon from '@material-ui/icons/Menu';
 import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
 import NotificationsIcon from '@material-ui/icons/Notifications';
 import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
 import { mainListItems, secondaryListItems } from './listItems';
 import VerticalLinearStepper from './Stepper';
 import sharedStyles from "../../components/sharedStyles";
 import { HashRouter as Router, Route, Switch } from 'react-router-dom'
 import Orders from './Orders';

 function Copyright() {
   return (
     <Typography variant="body2" color="textSecondary" align="center">
       {'Copyright © '}
       <Linka color="inherit" href="https://material-ui.com/">
         Your Website
       </Linka>{' '}
       {new Date().getFullYear()}
       {'.'}
     </Typography>
   );
 }

 const drawerWidth = 240;
 console.log(sharedStyles)
 const useStyles = makeStyles((theme) => ({
  ...sharedStyles,

   root: {
     display: 'flex',
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
     zIndex: theme.zIndex.drawer + 1,
     transition: theme.transitions.create(['width', 'margin'], {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.leavingScreen,
     }),
   },
   appBarShift: {
     marginLeft: drawerWidth,
     width: `calc(100% - ${drawerWidth}px)`,
     transition: theme.transitions.create(['width', 'margin'], {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.enteringScreen,
     }),
   },
   menuButton: {
     marginRight: 36,
   },
   menuButtonHidden: {
     display: 'none',
   },
   title: {
     flexGrow: 1,
   },
   drawerPaper: {
     position: 'relative',
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
     height: '100vh',
     overflow: 'auto',
   },
   container: {
     paddingTop: theme.spacing(4),
     paddingBottom: theme.spacing(4),
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
   box:{
    justifyContent:'center',
    display: 'flex',
     alignItems:'center'
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
 
 export default function Home() {
   const classes = useStyles();
   const [open, setOpen] = React.useState(true);
   const handleDrawerOpen = () => {
     setOpen(true);
   };
   const handleDrawerClose = () => {
     setOpen(false);
   };
 
   return (
     <div className={classes.root}>
        
       <CssBaseline />
       <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
         <Toolbar className={classes.toolbarSecondary}>
           

           <Typography className={classes.men}>
           <Link to="/" className={classes.toolbarLink} onClick={() => {
    console.info("I'm a button.");
  }} color="inherit">
    {'Home'}
  </Link>
  <Link to="/newproject" className={classes.toolbarLink} onClick={() => {
    console.info("I'm a button.");
  }} color="inherit">
    {'Stepper'}
  </Link>
  <Link href="#" className={classes.toolbarLink} onClick={() => {
    console.info("I'm a button.");
  }} color="inherit">
    {'link'}
  </Link>
</Typography>
           <IconButton color="inherit">
             <Badge badgeContent={4} color="secondary">
               <NotificationsIcon />
             </Badge>
           </IconButton>
         </Toolbar>
       </AppBar>
       <Drawer
         variant="permanent"
         classes={{
           paper: classes.drawerPaper
         }}
         open={open}
       >
         <div className={classes.toolbarIcon}>
         <Container className={classes.box}>
         <ShoppingCartIcon />
         </Container>
           
         </div>
         <Divider />
         <List>{mainListItems}</List>
         <Divider />
         <List>{secondaryListItems}</List>
       </Drawer>

       <main className={classes.content}>
         <div className={classes.appBarSpacer} />
         <Container maxWidth="lg" className={classes.container}>
         
           <Grid container spacing={3}>
             {/* Chart */}
             <Grid item xs={12} lg={12}>
               <Switch>
        <Route path="/" component={Orders} exact />
        <Route path="/newproject" component={VerticalLinearStepper} />
      </Switch>
               {/*<Paper className={fixedHeightPaper}>
                 <VerticalLinearStepper />
               </Paper>*/}
             </Grid>
             {/* Recent Deposits
             <Grid item xs={12} md={4} lg={3}>
               <Paper className={fixedHeightPaper}>
                 <Deposits />
               </Paper>
             </Grid> 
              Recent Orders 
             <Grid item xs={12}>
               <Paper className={classes.paper}>
                 <Orders />
               </Paper>
             </Grid>*/}
           </Grid>
           <Box pt={4}>
             <Copyright />
           </Box>
         </Container>
       </main>
     </div>
   );
 }