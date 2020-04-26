import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Layout from '../components/layouts';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   large: {
//     width: theme.spacing(7) * 2.5,
//     height: theme.spacing(7) * 2.5,
//   },
// }));

export default function Blog() {
  // const classes = useStyles();

  return (
    <Layout>
      <Container maxWidth="sm" >
        <Box my={4} textAlign="center" alignItems="center" alignContent="center" alignSelf="center">
        </Box>
      </Container>
    </Layout>
  );
}
