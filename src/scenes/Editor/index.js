import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import sharedStyles from '../../components/sharedStyles'
import EditorTools from '../Editor/EditorTools'
import Drawer from '@material-ui/core/Drawer';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  ...sharedStyles,
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    minWidth: `calc(100% / 2)`, // a number of your choice
    width: `calc(100% / 2)`, // a number of your choice
},
drawer: {
  //width: drawerWidth,
  flexShrink: 0,
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
},
toolbarr: {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  ...theme.mixins.toolbar,
},
drawerPaper: {
  //position: 'relative',
  //whiteSpace: 'nowrap',
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  })
},
  rightDrawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
    pages: [
      {
        title: 'Home',
        href: '/vodafone',
      },
      {
        title: 'Settings',
        href: '/vodafone/settings',
      },
      {
        title: 'Stepper',
        href: '/vodafone/stepper',
      }
    ],
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
      href: '/vodafone/stepper',
      external: false,
      text: 'Stepper',
    }],
    drawer: [{
      subheader: 'Vodafone',
      id:'frggt',
      items: [{
          id:'jies54',
        href: '/',
        external: false,
        text: 'Home'
      },
      {
          id:'54yg',
        href: '/stepper',
        external: false,
        text: 'Stepper'
      },
      {id:'589gy',
        href: '/settings',
        external: false,
        text: 'Settings'
      },
      {
          id:'58rde',
        href: 'https://google.com',
        external: true,
        text: 'Orders'
      }]
    }, {
      subheader: 'Router settings',
      id:'hjhjhj',
      items: [{
          id:'iji5',
        href: '/',
        external: false,
        text: 'ZTE'
      },
      {
          id:'jh884wx',
        href: '/stepper',
        external: false,
        text: 'Huawei'
      },
      {
          id:'485srt',
        href: '/solver',
        external: false,
        text: 'Vdsl'
      }]
    }, {
      subheader: 'Troubleshooting Internet',
      id:'jkjkfe',
      items: [{
        href: '/',
        id:'452nk',
        external: false,
        text: 'Internet Not Working'
      },
      {
          id:'124r6g',
        href: '/stepper',
        external: false,
        text: 'Monitor bandwidth usage'
      },
      {
          id:'124tf',
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
export default function Editor() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const pages = allLinks().drawer
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>{'Grid with col with tools'}</Paper>
      <Drawer
       className={classes.rightDrawerPaper}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
        variant="persistent"
        open={true}
      ><div className={classes.toolbarr}>
      </div>
        <EditorTools pages={pages}/>
      </Drawer>
    </div>
  );
}
