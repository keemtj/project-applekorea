import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const ResetStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
`;

export default ResetStyle;
