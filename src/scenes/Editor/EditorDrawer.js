import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PagesList from "./PagesList";
import { Scrollbars } from "react-custom-scrollbars";
import DeleteIcon from "@material-ui/icons/Delete";
import { Draggable, Droppable } from "react-beautiful-dnd";
import LinkIcon from "@material-ui/icons/Link";
import Grid from "@material-ui/core/Grid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      key={"ghgh"}
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box pt={5}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  tab: {
    minWidth: `calc(100% / 2)`, // a number of your choice
    width: `calc(100% / 2)` // a number of your choice
  },
  subheader: {
    position: "fixed",
    boxShadow: "unset"
  },
  tablist: {
    width: "15%"
  },
  list: {
    marginTop: 20
  },
  drag:{
    '& + div': {
   display: 'none!important',
  },
}
}));

export default function EditorDrawer(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const tools = [
    {
      id: "gnu",
      label: "Text"
    },
    {
      id: "4rd3df",
      label: "Alert"
    },
    {
      id: "step",
      label: "Stepper"
    },
    {
      id: "expan",
      label: "Expansion"
    }
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.subheader}>
        <Tabs
          indicatorColor="primary"
          className={classes.tablist}
          textColor="inherit"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            classes={{ root: classes.tab }}
            key={"6hj7j"}
            label="Pages"
            {...a11yProps(0)}
          />
          <Tab
            classes={{ root: classes.tab }}
            key={"f4fg5"}
            label="Tools"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <Scrollbars
        hideTracksWhenNotNeeded
        renderTrackHorizontal={() => <div></div>}
        renderThumbHorizontal={() => <div></div>}
      >
        <TabPanel
          value={value}
          className={classes.list}
          key={"dggt5"}
          index={0}
        >
          <PagesList
            key={"ghghg"}
            OpenPage={props.OpenPage}
            RemovePage={props.RemovePage}
            renamePage={props.RenamePage}
            links={props.pages}
          />
        </TabPanel>

        <TabPanel value={value} key={"TOOLS"} index={1}>
          <Droppable droppableId="TOOLS" style={{ transform: "none" }} isDropDisabled={true}>
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {tools.map((tool, index) => (
                  <div key={index}>
                    <Draggable draggableId={tool.id} index={index}>
                      {(provided, snapshot) => (
                        <React.Fragment>
                          <Grid key={index}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            container   className="drag"
                            direction="row"
                            alignItems="center"
                          >
                            <LinkIcon />
                            <Typography>{tool.label}</Typography>
                          </Grid>
                          {snapshot.isDragging && 
                          <Grid key={'4'+index}
                            container style={{transform: 'none!important'}}
                            direction="row" className={classes.drag}
                            alignItems="center"
                          >
                            <LinkIcon />
                            <Typography>{tool.label}</Typography>
                          </Grid>
                          }
                       
                        </React.Fragment>
                      )}
                    </Draggable>
                  </div>
                ))}
              </div>
            )}
          </Droppable>
        </TabPanel>
      </Scrollbars>
    </div>
  );
}
