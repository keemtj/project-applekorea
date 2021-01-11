import React from 'react';
import styled from 'styled-components';

const Grid = ({
  col,
  row,
  cgap,
  rgap,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  children,
}) => {
  return (
    <StGrid
      col={col}
      row={row}
      cgap={cgap}
      rgap={rgap}
      margin={margin}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
    >
      {children}
    </StGrid>
  );
};

const StGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ col }) => col}, minmax(0, 1fr));
  grid-template-rows: repeat(${({ row }) => row}, 70rem);
  grid-column-gap: ${({ cgap }) => `${cgap}rem`};
  grid-row-gap: ${({ rgap }) => `${rgap}rem`};
  margin: 0rem ${({ margin }) => `${margin}rem`};
  margin-top: ${({ margin }) => `${margin}rem`};
  margin-bottom: ${({ margin }) => `${margin}rem`};
  margin-left: ${({ margin }) => `${margin}rem`};
  margin-right: ${({ margin }) => `${margin}rem`};
  padding: 0rem ${({ padding }) => `${padding}rem`};
  padding-top: ${({ padding }) => `${padding}rem`};
  padding-bottom: ${({ padding }) => `${padding}rem`};
  padding-left: ${({ padding }) => `${padding}rem`};
  padding-right: ${({ padding }) => `${padding}rem`};
`;

export default Grid;
