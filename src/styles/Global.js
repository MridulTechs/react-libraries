import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    a {
        text-decoration: none;
        color: unset;
    }
    div,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    header,
    html,
    i,
    img,
    label,
    li,
    nav,
    p,
    small,
    span,
    ul {
        margin: 0;
        padding: 0;
        border: 0;
        outline: none;
        vertical-align: baseline;
        background: transparent;
    }
`

export default Global