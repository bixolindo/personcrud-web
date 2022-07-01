import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: absolute;

  > h1 {
    width: 80%;
    padding: 20px;
    margin-top: 20px;
    border-bottom: 1px solid #000;
  }

  > .menu {
    width: 50%;
    height: 100%;
    border-radius: 10px;
    padding: 0;
    margin: 20px auto;

    background: #f0f2f5;
    padding: 2.4rem;

    > .form  {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      gap: 20px;

      @media (max-width: 825px) {
        flex-direction: column;
      }
    }

    > .form .name-camp {
      width: 80%;
      margin-left: 20px;
      > .text-input {
        width: 90%;
        margin: 0 20px;
      }
      @media (max-width: 825px) {
        width: 100%;
      }
    }


    .hide-input {
      display: none;
    }

    > .form .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      margin-top: 30px;

      > .btncancel {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 130px;
        height: 60px;
        margin: 0 20px;

        border: 1px solid darkred;
        color: darkred;
        background: #f0f2f5;

        text-decoration: none;

        border-radius: 14px;

        &:hover {
          background: darkred;
          border: 1px solid #f0f2f5;
          color: #f0f2f5;
        }
      }
      > .btnsave {
        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        width: 130px;
        height: 60px;
        color: #fff;
        background: #422435;
        border-radius: 14px;
        border: none;

        cursor: pointer;

        &:hover {
          background: #31081f;
        }
      }
    }
  }
`;
