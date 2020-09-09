import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

:root {

    --br: '0.5em',
	--mine: 'red';
    // --transition: 'transform 200ms cubic-bezier(0.2, 1, 0.8, 1)',
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
	body {
		font-family: 'Poppins', sans-serif;
		
	}
	

	h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
  
	}
	a {
		text-decoration: none;
		color: #2062e1;
	}
	a:visited {
		color: #2062e1;
	}
	button {
		cursor: pointer;
	}
	span {
		font-family: 'Poppins', sans-serif;
	}
	ul {
		list-style-type: none;
	}
	*:focus {
	  outline: none;
	}
	

	
`;

export default Global;
