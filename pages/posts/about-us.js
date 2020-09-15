import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
        <h1 class="body-title">ABOUT US</h1>
        <p class="body-text">
          Through academic, social, and professional events, the Minorities at
          the College of Computing club strives to empower underrepresented
          groups within the College of Computing with opportunities that promote
          excellence, community development, and leadership amongst members,
          as well as foster growth to help support the leaders of tomorrow.
        </p>
        <h1 class="body-title">GET PLUGGED IN</h1>
        <p class="body-text">
          Join our community's Discord server
          <a class="link" href="https://discord.gg/jB3KY6X" target="_blank"> here</a>!
        </p>
        <p class="body-text">
          Connect with us on
          <a class="link" href="https://instagram.com/maccgt" target="_blank"> Instagram </a>
          and
          <a class="link" href="https://www.facebook.com/thefuncction/" target="_blank"> Facebook</a>!
        </p>
        <h1 class="body-title">EXECUTIVE BOARD</h1>
        <div class="exec-photos-div">
          <img class="exec-photos" src="../exec-photos/neh.png" />
          <img class="exec-photos" src="../exec-photos/carver.png" />
          <img class="exec-photos" src="../exec-photos/liana.png" />
          <img class="exec-photos" src="../exec-photos/cam.png" />
        </div>
        <div class="exec-names-parent">
          <div class="exec-names-div">
            <p class="exec-names">Nehemiah Wilson</p>
            <br/>
            <p class="exec-names">President</p>
          </div>
          <div class="exec-names-div">
            <p class="exec-names">Carver Forbes</p>
            <br/>
            <p class="exec-names">Vice President</p>  
          </div>
          <div class="exec-names-div">
            <p class="exec-names">Liana Syrkett</p>
            <br/>
            <p class="exec-names">Logisitcs Lead</p>
          </div>
          <div class="exec-names-div">
            <p class="exec-names">Cameron Bennett</p>
            <br/>
            <p class="exec-names">Curriculum Lead</p>
          </div>
        </div>
      </div>
    </div>
  )
}
