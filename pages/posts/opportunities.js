import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar style={{ background: '#1f1f1f' }} position="static">
          <Toolbar> 
          <Button style={{ color: '#ffffff' }}>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </Button>
            <Button style={{ color: '#ffffff' }}>
              <Link href="/posts/about-us">
                <a>ABOUT US</a>
              </Link>
            </Button>
            <Button style={{ color: '#ffffff' }}>
              <Link href="/posts/opportunities">
                <a>OPPORTUNITIES</a>
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div class="body">
        <h1 class="body-title">OPPORTUNITIES</h1>
        <p class="body-text">
          Looking for a job? You've come to the right place.
          Click on an opportunity that interests you and apply!
        </p>
        <div class="opp-grid">
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <a href="https://buildyourfuture.withgoogle.com/programs/step/" target="_blank">
                <img class="opp-photo" src="../photos/google.png"/>
              </a>
              <p class="body-text">Google STEP</p>
            </Grid>
            <Grid item xs={4}>
            <a href="https://careers.twitter.com/en/university.html" target="_blank">
                <img class="opp-photo" src="../photos/twitter.png"/>
              </a>
              <p class="body-text">TwitterU</p>
            </Grid>
            <Grid item xs={4}>
            <a href="https://www.facebook.com/careers/students-and-grads/students" target="_blank">
                <img class="opp-photo" src="../photos/facebook.png"/>
              </a>
              <p class="body-text">Facebook University</p>
            </Grid>
          </Grid>
        </div>
        
      </div>
    </div>
  )
}
