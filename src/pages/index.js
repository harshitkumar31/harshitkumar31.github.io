import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Layout from '../components/layouts';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import DazzlrImage from '../components/images/dazzlr.png';
import PaymentPortal from '../components/images/paymentPortal.png';
import InstaImage from '../components/images/instaclone.png';
import QuikrImage from '../components/images/QuikrScreenGrab.png';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7) * 2.5,
    height: theme.spacing(7) * 2.5,
  },
}));

const projects = [
  {
    name: 'Quikr',
    description: 'Worked on Quikr\'s Progressive Web App. Built using Preact, Redux',
    image: QuikrImage,
    href: 'https://www.quikr.com'
  }, {
    name: 'Dazzlr',
    description: 'Dazzlr is an “Entertainment Marketplace” that enables job seekers (actors, dancers, models, etc.) to connect with clients (directors, casting directors, production houses). Built using React, Redux',
    image: DazzlrImage,
    href: 'https://www.dazzlr.in'
  }, {
    name: 'Mrnd Payment Portal',
    description: 'Built a portal for collecting payments for Mission RnD',
    image: PaymentPortal,
    href: 'http://ec2-13-127-195-154.ap-south-1.compute.amazonaws.com/'
  },
  {
    name: 'Instaclone',
    description: 'Built an instagram clone using Backbone.js and Django',
    image: InstaImage,
    href: 'https://instaclone.github.io/'
  }
]

export default function Index() {
  const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="sm" >
        <Box my={4} textAlign="center" alignItems="center" alignContent="center" alignSelf="center">
          <Typography variant="h4" component="h1" gutterBottom>
            Full-stack Developer
        </Typography>
          <Avatar
            alt="Harshit Kumar"
            className={classes.large}
            src="https://avatars0.githubusercontent.com/u/15359962?s=400&u=ab3f68813a42041666b79d9ded00e9d26f4ddc1d&v=4"
            style={{ display: "-webkit-inline-box" }}
          />

          <p>Hello, my name is Harshit Kumar. <br />
          I'm a Software Engineer, programming enthusiast. <br />
          I enjoy coding and bringing ideas to life.</p>

          <h3>My Recent Work</h3>

          <Grid container className={classes.root} spacing={10} alignItems="stretch">
            <Grid item xs={12} >
              <Grid container className={classes.demo} justify="center" spacing={10} alignItems='stretch'>
                {projects.map((project, value) => (<Grid key={value} item>
                  <Card className={classes.card} raised>
                    <img src={`${project.image}`} style={{ maxWidth: "250px", maxHeight: "140px" }} className={classes.media}></img>
                    <CardContent>
                      <Typography component="h3">
                        {project.name}
                      </Typography>
                      <Typography component="h5" className={classes.projectText}>
                        {project.description}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                      <Button size="small" href={project.href} target="_blank">
                        Visit
                    </Button>
                    </CardActions>
                  </Card>
                </Grid>))}
              </Grid>
            </Grid>
          </Grid>
          <br />


        </Box>
      </Container>
    </Layout>
  );
}
