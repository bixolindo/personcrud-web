import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: max-content;
    position: absolute;

    >.header{
        display: flex;
        justify-content: space-evenly;

        width: 80%;
        padding: 10px;
        margin-top: 10px;
        border-bottom: 1px solid #31081F;
    }

    >.header h1{
        color: #31081F;
        width: 80%;
        padding: 10px;
        margin-top: 10px;
    }
    >.header .addbtn {
        display: flex;
        align-items: center;
        justify-content: space-evenly;


        width: 54px;
        height: 54px;
        border-radius:50%;
        padding: 5px;

        background: #DFE3DD;
        color:#422435;

        cursor: pointer;
        border: 1px solid #422435;

        text-decoration: none;

        transition: 0.9s;

        >span{
            display: none;
            opacity: 0;
        }

        &:hover{
            width:100px;
            border-radius:14px;

            >span{
                display: inline;
                opacity: 1;
            }
        }
    }

    >main{
        margin: 47px auto 0;
        display: grid;
        grid-template-columns: repeat(4,247px);
        column-gap: 20px;
        
        @media(max-width: 1060px){
            grid-template-columns: repeat(3,247px);
        }
        @media(max-width: 800px){
            grid-template-columns: repeat(2,247px);
        }
        @media(max-width: 600px){
            grid-template-columns: repeat(1,247px);
        }
    }
    
`;

