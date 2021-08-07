import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *{
    box-sizing:  border-box;
  }

  
  :root{
    display: flex;
    justify-content: center;
  }
	

	
`;

export default GlobalStyle;
