import React from 'react';
import Grid from '../Layout/Grid';
import Article from './Article';

const Articles = () => {
  const list = [0, 1, 2];
  return (
    <Grid
      col={12}
      row={list.length - 1}
      cgap={2}
      rgap={2}
      margin={0}
      padding={3}
    >
      {list.map((v, i) => (
        <Article row={i + 1} key={i} />
      ))}
    </Grid>
  );
};

export default Articles;
