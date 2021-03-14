import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import OfficersView from './sub-components/officers_view';
import EntityView from './sub-components/entity_view';
import IntermediaryView from './sub-components/intermediary_view';
import AddressesView from './sub-components/addresses_view';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '30px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
              <Typography variant="h4">
                  Offshore Data Leaks Vizualization Dashboard
              </Typography>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
                <OfficersView />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
                <EntityView />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <IntermediaryView />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <AddressesView />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
