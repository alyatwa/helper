import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import sharedStyles from '../../components/sharedStyles'
import EditorDrawer from '../Editor/EditorDrawer'
import Drawer from '@material-ui/core/Drawer';
import RenameDialog from '../../components/RenameDialog';
import MsgDialog from '../../components/MsgDialog';
import StepperEditor from './StepperEditor';

/*function TabPanel(props) {
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
}*/
const drawerWidth = 240;
const styles = theme => ({
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
});

class Editor extends Component {
  constructor(props) {
    super(props);
    this.namedialog = React.createRef();
    this.remove = React.createRef();
    this.state = {
      pages: [],
      currentPage:{},
      event: {
        itemId: '',
        subId: '',
        name: '',
        title: '',
        description: '',
        value: '',
        pageType: ''
      }
    }
  }
  allLinks = (data) => {
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
        id: 'frggt',
        items: [{
          id: 'jies54',
          href: '/',
          external: false,
          text: 'Home',
          content:[
            {
              component:'stepper',
              finish:'finish',
              steps:[{
                id:25252,
                label:'step 1',
                description: 'description.....'
              },
              {
                id:2525,
                label:'step 2',
                description: 'description.....'
              }
            ]
            }
          ]
        },
        {
          id: '54yg',
          href: '/stepper',
          external: false,
          text: 'Stepper'
        },
        {
          id: '589gy',
          href: '/settings',
          external: false,
          text: 'Settings'
        },
        {
          id: '58rde',
          href: 'https://google.com',
          external: true,
          text: 'Orders'
        }]
      }, {
        subheader: 'Router settings',
        id: 'hjhjhj',
        items: [{
          id: 'iji5',
          href: '/',
          external: false,
          text: 'ZTE'
        },
        {
          id: 'jh884wx',
          href: '/stepper',
          external: false,
          text: 'Huawei'
        },
        {
          id: '485srt',
          href: '/solver',
          external: false,
          text: 'Vdsl'
        }]
      }, {
        subheader: 'Troubleshooting Internet',
        id: 'jkjkfe',
        items: [{
          href: '/',
          id: '452nk',
          external: false,
          text: 'Internet Not Working'
        },
        {
          id: '124r6g',
          href: '/stepper',
          external: false,
          text: 'Monitor bandwidth usage'
        },
        {
          id: '124tf',
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
  RenamePage = (data) => {
    let pagetype = this.state.event.pageType
    let SubId = this.state.event.subId
    let itemId = this.state.event.pageId
    let name = data.name

    if (pagetype === 'Subheader') {
      this.setState(state => {
        var index = state.pages.findIndex(obj => obj.id === SubId);
        const list = state.pages[index].subheader = name;
        return {
          list
        }
      })
    } else if (pagetype === 'Page') {
      this.setState(state => {
        var subIndex = state.pages.findIndex(obj => obj.id === SubId);
        var itemIndex = state.pages[subIndex].items.findIndex(obj => obj.id === itemId);
        const list = state.pages[subIndex].items[itemIndex].text = name;
        return {
          list
        }
      })
    }
  }
  renamePageDialog = (page) => {
    console.log(page)
    this.setState({
      event: {
        pageId: page.pageId,
        subId: page.subId,
        action: page.event,
        title: (page.event === 'rename' ? 'Rename ' : 'Add ') + page.type,
        description: `Please enter a new name for the ${page.type}`,
        value: (page.event === 'addPage' ? '' : page.title),
        pageType: page.type
      }
    })
    this.namedialog.current.getAlert(page.title, page.pageId, page.event)
  }
  addSubHeader = (Subheader) => {
    console.log(Subheader)
    const newSubheader = {
      subheader: Subheader.name,
      id: 'newtestID',
      items: []
    }
    this.setState(state => {
      const list = state.pages.push(newSubheader)
      return {
        list
      }
    })
  }
  addPage = (data) => {
    let SubId = this.state.event.subId
    var index = this.state.pages.findIndex(obj => obj.id === SubId);
    const newPage = {
      id: 'frg',
      href: '/',
      external: false,
      text: data.name
    }
    this.setState(state => {
      const list = state.pages[index].items.push(newPage)
      return {
        list
      }
    })
  }
  removeDialog = (page) => {
    console.log(page)
    this.setState({
      event: {
        pageId: page.pageId,
        subId: page.subId,
        action: page.event,
        pageType: page.type
      }
    })
    this.remove.current.getAlert()
  }
  doRemove = (data) => {
    let pagetype = this.state.event.pageType
    let SubId = this.state.event.subId
    let itemId = this.state.event.pageId
    //let name = data.name
    //console.log(data)
    if (pagetype === 'Subheader') {
      this.setState({
        pages: this.state.pages.filter(item => item.id !== SubId)
      })
    } else if(pagetype === 'Page') {
      var subIndex = this.state.pages.findIndex(obj => obj.id === SubId);
      var itemIndex = this.state.pages[subIndex].items.findIndex(obj => obj.id === itemId);
      this.setState(state => {
        const list = this.state.pages[subIndex].items.splice(itemIndex, 1)
        return {
          list
        }
      })

    }

  }
  func = (data) => {
    console.log(data)
    if (data.event === "rename" && data.name.length > 1) {
      this.RenamePage(data)
    } else if (data.event === "addPage" && data.name.length > 1) {
      this.addPage(data)
    } else if (data.event === "addSubheader" && data.name.length > 1) {
      this.addSubHeader(data)
    }
  }
  componentDidMount() {
    let pages = this.allLinks().drawer
    this.setState({ pages })
  }
  openPage = (data) => {
    //console.log(data)
    this.setState({
      currentPage:{
      pageId:data.pageId,
    }})
  }

  render() {
    const pagesList = this.state.pages
    const { classes } = this.props;
    //console.log(pagesList)
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>{this.state.currentPage.pageId}
        <StepperEditor {...this.allLinks().drawer[0].items[0].content}/>
        </Paper>
        <MsgDialog sure={this.doRemove} id={'0'} name={'props.title'} ref={this.remove} />
        <RenameDialog ref={this.namedialog} func={this.func} action={this.state.event.action} title={this.state.event.title} description={this.state.event.description} value={this.state.event.value} />
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
          <EditorDrawer OpenPage={this.openPage} RemovePage={this.removeDialog} RenamePage={this.renamePageDialog} pages={pagesList} />
        </Drawer>
      </div>
    )
  }
}
export default withStyles(styles)(Editor);