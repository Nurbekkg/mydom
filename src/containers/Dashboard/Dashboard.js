import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
    dashboardHeader: {
        backgroundImage: 'linear-gradient(to right, #2BCE56 , #1D5D77)'
    }
};

class Dashboard extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Grid container>
                <Grid item xs={12}>
                    <Grid container spacing={40} alignItems="center" className={classes.dashboardHeader}>
                        <Grid item xs={6}>
                            <Typography variant="h3">
                                ТСЖ Ахунбаева 186
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <p>Адрес</p>
                            <Typography variant="h4">
                                Ахунбаева 186/5
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <p>Квартира</p>
                            <Typography variant="h4">
                                77
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                </Grid>
            </Grid>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);