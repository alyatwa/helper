import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
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

const styles = theme => ({
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

})


//const namedialog = React.useRef(null);
class Projects extends Component {
  constructor(props) {
    super(props);
    this.namedialog = React.createRef();
    this.state = {
      projects: []
    }
    // To use the 'this' keyword, we need to bind it to our function
    //this.onChange = this.onChange.bind(this);
  }
  getProjects = (data) => {
    return [
      {
        id: 45845455,
        size: 4,
        title: 'Vodafone',
        date: 'September 14, 2016',
        link: '/vodafone',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
      },
      {
        id: 487845,
        size: 4,
        title: 'Internal',
        date: 'September 14, 2016',
        link: '/internal',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
      },
      {
        id: 12151246,
        size: 4,
        title: 'Customer',
        date: 'September 14, 2016',
        link: '/customer',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
      },
      {
        id: 132998,
        size: 4,
        title: 'Vodafone',
        date: 'September 14, 2016',
        link: '/vodafone',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
      },
      {
        id: 454545123,
        size: 4,
        title: 'Internal',
        date: 'September 14, 2016',
        link: '/internal',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
      },
      {
        id: 1398,
        size: 4,
        title: 'Customer',
        date: 'September 14, 2016',
        link: '/customer',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
      }
    ]
  }
  addProject = (project) => {
    const newProject = {
      id: 145451,
      size: 4,
      title: project.name,
      date: 'September 14, 2020',
      link: '/apple',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vodafone_icon.svg/473px-Vodafone_icon.svg.png'
    }
    this.setState(state => {
      const list = state.projects.push(newProject)
      return {
        list
      }
    })
  }
  removeProject = (project) => {
    let id = project.id
    this.setState({
      projects: this.state.projects.filter(item => item.id !== id)
    })
  }
  renameAction = (name) => {
    console.log('name project ', name)
  }
  componentDidUpdate() {
  }
  componentDidMount() {
    let projects = this.getProjects()
    this.setState({projects})
  }
  render() {
    const { classes } = this.props;
    const projects = this.state.projects;
    console.log('render  ' + projects)
    return (
      <div className={classes.root}>

        <Grid container spacing={3}>
          {Object.keys(this.state.projects).map((project, index) =>
            <Grid key={this.state.projects[project].id + index} item lg={project.size} md={6} sm={12} xs={12}>
              <ProjectCard
                id={this.state.projects[project].id}
                key={this.state.projects[project].id}
                remove={this.removeProject}
                rename={this.renameAction}
                title={this.state.projects[project].title}
                date={this.state.projects[project].date}
                link={'dashboard' + this.state.projects[project].link}
                img={this.state.projects[project].img} />
            </Grid>)}

        </Grid>
        <RenameDialog ref={this.namedialog} newName={this.addProject} title={'Name Project'} description={'Please enter a name for new the project'} value={''} />
        <Fab onClick={() => this.namedialog.current.getAlert()} className={classes.fab} size="small" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    )
  }
}
export default withStyles(styles)(Projects);