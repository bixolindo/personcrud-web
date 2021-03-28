import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 90px;
    background: #422435;
    color: #fff;

    >.addbtn {
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
    
`;
