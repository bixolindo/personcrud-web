import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: max-content;
    
    font-family: tahoma;
    background-image: url(https://picsum.photos/g/1800/1080);
    background-size: cover;
    background-position: center;

    >main{
        margin: 47px auto 0;
        display: grid;
        grid-template-columns: repeat(4,247px);
        column-gap: 20px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 90px;
    background: #422435;
    color: #fff;

    >button {
        width: 54px;
        height: 54px;
        border-radius:50%;
        padding: 5px;

        background: #DFE3DD;
        color:#422435;

        cursor: pointer;
        border: 1px solid #422435;

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
    
`;
