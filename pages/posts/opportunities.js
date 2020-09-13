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
      <h1 style={{ color: "#ffffff" }}>OPORTUNITIES</h1>
    </div>
  )
}
