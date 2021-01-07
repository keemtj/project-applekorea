import React from 'react';
import styled from 'styled-components';

const Grid = ({ col, row, cgap, rgap, children }) => {
  console.log(col, row, cgap, rgap);
  return (
    <StGrid col={col} row={row} cgap={cgap} rgap={rgap}>
      {children}
    </StGrid>
  );
};

const StGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ col }) => col}, minmax(0, 1fr));
  grid-template-rows: repeat(${({ row }) => row}, 10%);
  grid-column-gap: ${({ cgap }) => `${cgap}rem`};
  grid-row-gap: ${({ rgap }) => `${rgap}rem`};
  padding: 0rem 2rem;
`;

export default Grid;
