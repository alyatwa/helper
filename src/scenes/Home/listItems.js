import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

export const mainListItems = (
  <div>
    <ListItem button
    to="/" 
    component={Link}>
      <ListItemText primary="Dashboard" />
    </ListItem>

    <ListItem button
    to="/orders" 
    component={Link}>
      <ListItemText primary="Subscription" />
    </ListItem>
    <ListItem button
    to="/solver" 
    component={Link}>
      <ListItemText primary="Solver" />
    </ListItem>
    <ListItem button
    to="/stepper" 
    component={Link}>
      <ListItemText primary="Stepper" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Routers Settings
        </ListSubheader>
      }
    >
      <ListItem button
    to="/settings" 
    component={Link}>
      <ListItemText primary="ZTE" />
    </ListItem>
    
    <ListItem button>
      <ListItemText primary="Huawei" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Vdsl" />
    </ListItem>
    </List>
    <Divider />
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Troubleshooting Internet
        </ListSubheader>
      }
    >
    <ListItem button>
      <ListItemText primary="Internet Not Working" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Monitor bandwidth usage" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Limit internet speed" />
    </ListItem>
    </List>
  </div>
);
