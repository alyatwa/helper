import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Title from './Title';
import clsx from 'clsx';
import StepperCard from '../../components/Stepper';
import ExpansionCard from '../../components/Expansion';
import Markdown from '../../components/Markdown';
import sharedStyles from "../../components/sharedStyles";

const useStyles = makeStyles(theme => ({
  ...sharedStyles,
  root: {
    width: '100%',
  },
  shadow: {
    boxShadow: 'unset'
  },
  fixedHeight: {
    height: '100%',
  },
  markdown: {
    ...theme.typography.body2,
    //padding: theme.spacing(3, 0),
  },
}));

function getAll() {
  return {
    page: 'page name',
    components: [{
      name: 'markdown',
      content: '# H1 How to Set router?'
    },
    {
      name: 'stepper',
      finish:'All steps completed - you*re finished',
      steps: [{
        label: 'Restart router',
        description: 
`Restart your router!!  

#  h1  

##  h2  
###  h3  
line 1

line 2
# Header
paragrph  text text text text text text text text text text text text text 
![img](https://github.com//HarryChen0506/react-markdown-editor-lite/blob/master/image/react-markdown-editor-lite-v1.0.0.PNG?raw=true)
kjiji

<iframe width="560" height="315"
src="https://www.youtube.com/embed/MUQfKFzIOeU" 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>
![Espen](https://espen.codes/assets/img/avatar-colored.jpg)`,
      }, {
        label: 'Check router setteings',
        description: 'Login to router settings to chech if it working',

      }, {
        label: 'Run your network diagnostics',
        description: 'Run your network diagnostics',

      }, {
        label: 'Call Service Provider',
        description: 'Call support team',

      }]
    },
    {
      name: 'expansion',
      panels: [{
        id: 'fghghtht',
        heading: 'General settings',
        secondaryHeading: 'I am an expansion panel',
        Details: `
  # H1
  ## H2  
  ### H3  
  ![Espen](https://espen.codes/assets/img/avatar-colored.jpg)  
  
  ### H3  
  Changes are automatically re This is a header  
  And this is a paragraph [I'm an inline-style link](https://www.google.com)  
  dddcvc ff **bokd**  
  ![Espen](https://espen.codes/assets/img/avatar-colored.jpg)  
  
  ## H2 Table of Contents`
      },
      {
        id: 'fgrxcdelolo',
        heading: 'Wifi settings',
        secondaryHeading: 'I am an expansion panel',
        Details: `## Table of Contents  
      jjhh`
      },
      {
        id: 'dfgrete',
        heading: 'General settings',
        secondaryHeading: 'I am an expansion panel',
        Details: '# This is a header\n\nAnd this is a paragraph'
      }]
    }

    ]
  }
}
export default function ContentPage(props) {
  const classes = useStyles();
  const page = getAll();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
 
  return (
    <React.Fragment>
        <Paper className={fixedHeightPaper}>
          {page.components.map((component, index) => (
            <div className={classes.root}>
              {component.name === 'markdown' ? <Markdown className={classes.markdown}>{component.content}</Markdown>
                : component.name === 'expansion' ? <ExpansionCard data={component.panels} />
                  : <StepperCard steps={component} />
              }
            </div>
          ))}
        </Paper>
      
    </React.Fragment>
  );
}
