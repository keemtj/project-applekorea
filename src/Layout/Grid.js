import React from 'react';
import styled from 'styled-components';

const Grid = ({ col, row, cgap, rgap, margin, padding, children }) => {
  return (
    <StGrid
      col={col}
      row={row}
      cgap={cgap}
      rgap={rgap}
      margin={margin}
      padding={padding}
    >
      {children}
    </StGrid>
  );
};

const StGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ col }) => col}, minmax(0, 1fr));
  grid-template-rows: repeat(${({ row }) => row}, fit-content);
  grid-column-gap: ${({ cgap }) => `${cgap}rem`};
  grid-row-gap: ${({ rgap }) => `${rgap}rem`};
  margin: 0rem ${({ margin }) => `${margin}rem`};
  padding: 0rem ${({ padding }) => `${padding}rem`};
`;

export default Grid;
