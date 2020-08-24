import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

:root {
  }
	html, body {
		box-sizing: border-box;
		height: 100%;

	}
	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}
    body * {
        transition: 0.2s;

      }
	h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
  
	}
	*:focus {
	  outline: none;
	}

	
`;

export default Global;
