import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
    marginLeft: 300,
    background:' #ffffe6',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://watsonccs.co.uk/wp-content/uploads/2015/03/Dollarphotoclub_82491771.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container justify="flex-end">
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  STAR DRY CLEANERS
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Address 256 Cambridge Health RD,London E29DA
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Phone:020 8981 3747
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Rate this shop and share your reviews
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Price<br></br>Shirt on Hanger-$19.00 <br></br> Shirt Folded-$3.50<br></br>Delicate Shirt on Hanger-$5.00<br></br> T-Sirt on Hanger-$275<br></br>Polo on Hanger-$3.00<br></br>Polo Shirt Folded</Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle2"> 
                <Button variant="contained"  color="primary">Visit Now</Button>
                </Typography>
            </Grid>
           
          </Grid>
        </Grid>
      </Paper>
    </div>
   








     
  );
}
