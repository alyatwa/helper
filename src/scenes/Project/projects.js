import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCard from '../../components/ProjectCard';
import sharedStyles from "../../components/sharedStyles";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Scrollbars } from 'react-custom-scrollbars';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RenameDialog from './RenameDialog';

const useStyles = makeStyles(theme => ({
  ...sharedStyles,
  root: {
    flexGrow: 1,
  },
  box: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 25
  }, 
  fab: {
    position: 'fixed',
    zIndex: 999,
    bottom: theme.spacing(4),
    right: theme.spacing(5)
  }

}));
function getProjects() {
  return [
    {
      size: 4,
      title: 'Vodafone',
      date: 'September 14, 2016',
      link: '/vodafone',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
    },
    {
      size: 4,
      title: 'Internal',
      date: 'September 14, 2016',
      link: '/internal',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
    },
    {
      size: 4,
      title: 'Customer',
      date: 'September 14, 2016',
      link: '/customer',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
    },
    {
      size: 4,
      title: 'Vodafone',
      date: 'September 14, 2016',
      link: '/vodafone',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
    },
    {
      size: 4,
      title: 'Internal',
      date: 'September 14, 2016',
      link: '/internal',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
    },
    {
      size: 4,
      title: 'Customer',
      date: 'September 14, 2016',
      link: '/customer',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
    }
  ]
}
export default function Projects(props) {
  const classes = useStyles();
  const projects = getProjects();
  const namedialog = React.useRef(null);
  function setNewName(name) {
    console.log(name)
  }
  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        {projects.map((project, index) =>
          <Grid item lg={project.size} md={6} sm={12} xs={12}>
            <ProjectCard
              title={project.title}
              date={project.date}
              link={'dashboard' + project.link}
              img={project.img} />
          </Grid>)}

      </Grid>
      <RenameDialog newName={setNewName} title={'Name Project'} description={'Please enter a name for new the project'} value={''} ref={namedialog}/>
      <Fab onClick={()=>namedialog.current.getAlert()} className={classes.fab} size="small" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}