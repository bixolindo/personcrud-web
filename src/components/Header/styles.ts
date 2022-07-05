import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 90px;
    background: #422435;
    color: #fff;

    .btncancel {
        width: 100px;
        height: 30px;
        margin: 10px;

        border: 1px solid darkred;
        color: darkred;
        background: #f0f2f5;

        text-decoration: none;

        border-radius: 14px;

        &:hover {
          background: #422435;
          border: 1px solid #f0f2f5;
          color: #f0f2f5;
        }
    }
`;
