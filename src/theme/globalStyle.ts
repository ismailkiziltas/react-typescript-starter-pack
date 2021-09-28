import { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,::before,::after{
        box-sizing:border-box;
        outline:none;
        font-family:'Poppins', sans-serif;
    }
    html{
        font-size: 10px;
    }
    body{
        margin:0;
        font-size:1rem;
    }
    ul,ol{
        list-style:none;
        padding:0;
        margin:0;
    }
    a{
        display:inline-block;
        text-decoration:none;
    }
    button {
        display:inline-block;
        border:none;
        cursor:pointer;
        background-color:transparent;
    }
    h1, h2, h3, h4, h5, h6, p{
        margin:0;
    }
    img{
        display:block;
        max-width:100%;
    }
`;
export default GlobalStyle;