import React from 'react';
import styled from 'styled-components';

const Grid = ({
  col,
  row,
  height,
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
      height={height}
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
  grid-template-rows: repeat(
    ${({ row }) => row},
    ${({ height }) => `${height}rem`}
  );
  grid-column-gap: ${({ cgap }) => `${cgap}rem`};
  grid-row-gap: ${({ rgap }) => `${rgap}rem`};
  margin: 0rem ${({ margin }) => `${margin}rem`};
  margin-top: ${({ marginTop }) => `${marginTop}rem`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}rem`};
  margin-left: ${({ marginLeft }) => `${marginLeft}rem`};
  margin-right: ${({ marginRight }) => `${marginRight}rem`};
  padding: 0rem ${({ padding }) => `${padding}rem`};
  padding-top: ${({ paddingTop }) => `${paddingTop}rem`};
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}rem`};
  padding-left: ${({ paddingLeft }) => `${paddingLeft}rem`};
  padding-right: ${({ paddingRight }) => `${paddingRight}rem`};
`;

export default Grid;
