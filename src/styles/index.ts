import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root {
    --light-purple: #CEC6CE;
    --background: #E5E5E5;
    --dark-purple: #5D405C;
    --gray-3: #828282;
}
@media screen and (max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}
@media screen and (max-width: 720px) {
    html {
        font-size: 87.5%;
    }
}
body {
    background: var(--white);
    color: var(--gray-900);
}
body, input, select, textarea, button {
    font: 400 1rem "Montserrat", sans-serif;
}
button {
    cursor: pointer;
}
a {
    color: inherit;
    text-decoration: none;
}
`

export default GlobalStyle;