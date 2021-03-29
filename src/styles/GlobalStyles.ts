import {createGlobalStyle, css} from "styled-components";

const RobotoFont = css`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap');
`;

export default createGlobalStyle `
    ${RobotoFont}
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Times New Roman', Times, serif;
    }

    body{
      background: #c4b5aa;
      overflow-x: hidden;
    }
`;
