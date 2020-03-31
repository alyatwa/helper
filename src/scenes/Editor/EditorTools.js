import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PagesList from './PagesList';
import { Scrollbars } from 'react-custom-scrollbars';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      key={'ghgh'}
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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    minWidth: `calc(100% / 2)`, // a number of your choice
    width: `calc(100% / 2)`, // a number of your choice
  },
  subheader: {
    position: 'fixed',
    boxShadow: 'unset'
  },
  tablist: {
    width: '15%'
  },
  list: {
    marginTop: 20,
  }
}));

export default function EditorTools(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.subheader}>
        <Tabs indicatorColor="primary" className={classes.tablist}
          textColor="inherit" value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab classes={{ root: classes.tab }} key={'6hj7j'} label="Pages" {...a11yProps(0)} />
          <Tab classes={{ root: classes.tab }} key={'f4fg5'} label="Tools" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <Scrollbars hideTracksWhenNotNeeded  renderTrackHorizontal={() => <div></div>} renderThumbHorizontal={() => <div></div>}>
        <TabPanel value={value} className={classes.list} key={'dggt5'} index={0}>

          <PagesList key={'ghghg'} renamePage={props.RenamePage} links={props.pages} />

        </TabPanel>
      </Scrollbars>
      <TabPanel value={value} key={'fbj3'} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}
