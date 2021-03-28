import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: max-content;

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

