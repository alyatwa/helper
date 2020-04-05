import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import sharedStyles from '../../components/sharedStyles'
import EditorDrawer from '../Editor/EditorDrawer'
import Drawer from '@material-ui/core/Drawer';
import RenameDialog from '../../components/RenameDialog';
import MsgDialog from '../../components/MsgDialog';
import StepperEditor from './StepperEditor';
import ExpansionEditor from './ExpansionEditor';
import Input from '@material-ui/core/Input';
import Title from '../../components/Title'
import Grid from '@material-ui/core/Grid';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from './Alert';
import Text from './Text';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinkIcon from '@material-ui/icons/Link';

const drawerWidth = 240;
const styles = theme => ({
  ...sharedStyles,
  root: {
    flexGrow: 1,
    //backgroundColor: theme.palette.background.paper,
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
  },
  margin: {
    margin: theme.spacing(1),
  },
});

class Editor extends Component {
  constructor(props) {
    super(props);
    this.namedialog = React.createRef();
    this.remove = React.createRef();
    this.state = {
      pages: [],
      currentPage: {},
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
    this.addStep = this.addStep.bind(this);
    this.removeStep = this.removeStep.bind(this);
    this.stepperText = this.stepperText.bind(this);
   /* this.expansionText = this.expansionText.bind(this);*/
    this.TextAction = this.TextAction.bind(this);
    this.AlertAction = this.AlertAction.bind(this);
    
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
          content: [
            {
              component: 'Text',
              id: 12541,
              text: 'msfg new!',
            },
            {
              component: 'Alert',
              id: 42425,
              msg: 'msfg new!',
              severity: 'success'
            },
            {
              component: 'stepper',
              id:333455,
              finish: 'finish',
              steps: [{
                id: 2544452,
                label: 'step 1',
                description: 'description.....'
              },
              {
                id: 2525,
                label: 'step 2',
                description: 'description.....'
              }
              ]
            },
            {
              component: 'expansion',
              id: 78315497,
              steps: [{
                id: 45789,
                heading: 'step 1',
                secondaryHeading: 'secondaryHeading.....',
                Details: 'Details.....'
              },
              {
                id: 25252,
                heading: 'step 2',
                secondaryHeading: '2secondaryHeading.....',
                Details: 'Details.....'
              }
              ]
            }
          ]
        },
        {
          id: '45467676',
          href: '/stepper',
          external: false,
          text: 'Stepper',
          content: [
            {
              component: 'stepper',
              finish: 'finish',
              steps: [{
                id: 25252,
                label: 'Tt',
                description: 'description.....'
              },
              {
                id: 2525,
                label: 'test',
                description: 'description.....'
              }
              ]
            }
          ]
        },
        {
          id: '589gy',
          href: '/settings',
          external: false,
          text: 'Settings',
          content:[]
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
    } else if (pagetype === 'Page') {
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
  componentWillMount() {
    let pages = this.allLinks().drawer
    this.setState({
      pages,
      currentPage: { page: pages[0].items[0] }
    })
  }
  
  openPage = (data) => {
    var { pageId, subId } = data
    var subIndex = this.state.pages.findIndex(obj => obj.id === subId);
    var itemIndex = this.state.pages[subIndex].items.findIndex(obj => obj.id === pageId);
    let page = this.state.pages[subIndex].items[itemIndex]
    this.setState({
      currentPage: {
        pageId,
        subId,
        page
      }
    })

  }
  removeStep(id, index) {
    var itemIndex = this.state.currentPage.page.content[0].steps.findIndex(obj => obj.id === id);
    this.setState(state => {
      const list = this.state.currentPage.page.content[0].steps.splice(itemIndex, 1)
      return {
        list
      }
    })
  }
  addStep(step, stepperId) {
    let newStep = {
      id: 65678,
      label: 'new step',
      description: ''
    }
    let stepperIndex = this.state.currentPage.page.content.findIndex(obj => obj.id === stepperId);
    console.log(stepperIndex, stepperId)
    this.setState(state => {
      const list = state.currentPage.page.content[stepperIndex].steps.splice(step + 1, 0, newStep);
      //const list = state.stepper.steps.splice(step + 1, 0, newStep);
      return {
        list
      }
    })
  }
  TextAction(data) {
    let {value, textId} = data
    let textIndex = this.state.currentPage.page.content.findIndex(obj => obj.id === textId);
    this.setState(state => {
      const list = state.currentPage.page.content[textIndex].text= value;
      return {
        list
      }
    })
    console.log(this.state.currentPage.page.content[textIndex])
  }
  expansionText(data){
    let {value, sec, stepId, expansionId} = data
    
    var componentIndex = this.state.currentPage.page.content.findIndex(obj => obj.id === expansionId);
  
    var stepIndex = this.state.currentPage.page.content[componentIndex].steps.findIndex(obj => obj.id === stepId);
    this.setState(state => {  
      var list = state.currentPage.page.content[componentIndex].steps[stepIndex][sec] = value;
      return {
        list
      }
    })
    console.log(this.state.currentPage.page.content[componentIndex])
  }
  AlertAction(data){
    console.log(data)
    let {value, sec, alertId} = data
    var index = this.state.currentPage.page.content.findIndex(obj => obj.id === alertId);
    this.setState(state => {
      const list = state.currentPage.page.content[index][sec] = value;
      return {
        list
      }
    }) 
    console.log(this.state.currentPage.page.content[index])
  }
  stepperText(data){
    let {value, sec, stepId, stepperId} = data
    
    var componentIndex = this.state.currentPage.page.content.findIndex(obj => obj.id === stepperId);
    var stepIndex = this.state.currentPage.page.content[componentIndex].steps.findIndex(obj => obj.id === stepId);
    
     this.setState(state => {  
      var list=null
      if (stepId !== 'finish')
   {
       list = state.currentPage.page.content[componentIndex].steps[stepIndex][sec] = value;
    } else {
      list = state.currentPage.page.content[componentIndex][sec] = value;
    }
      return {
        list
      }
    })
  

    console.log(this.state.currentPage.page.content[componentIndex])
  }
  render() {
    const pagesList = this.state.pages
    const content = this.state.currentPage.page.content
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <Box mb={2}>
      <Grid container spacing={5} direction="row" alignItems="center">
           
            <Grid item>
              <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                  <Grid item>External</Grid>
                  <Grid item>
                    <Switch color="primary" name="checkedC" />
                  </Grid>
                  <Grid item>Internal</Grid>
                </Grid>
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-textfield"
                label="Link"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>  
          </Box>
          <Paper className={classes.paper}>
          <Title>{this.state.currentPage.page.text || ''}</Title>
          {content.map((comp, index) => (
            <div key={index}>
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <IconButton className={classes.button} aria-label="delete">
                    <ControlCameraIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton className={classes.button} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Typography variant="h6">{comp.component}</Typography>
                </Grid>
              </Grid>
              {(() => {
                switch (comp.component) {
                  case 'stepper':
                    return <StepperEditor StepperText={this.stepperText} key={index + 'hjhj'} addStep={this.addStep} removeStep={this.removeStep} {...comp} />
                    break;
                  case 'expansion':
                    return <ExpansionEditor ExpansionText={this.expansionText} key={index + '76'} {...comp} />
                  case 'Text':
                    return <Text TextAction={this.TextAction} {...comp} />
                  case 'Alert':
                    return <Alert AlertAction={this.AlertAction} {...comp} />
                    break;
                  default:
                    return ''
                }
              })()}
            </div>
          )
          )}
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