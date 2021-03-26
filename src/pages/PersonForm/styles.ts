import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.5s;

    >.menu{
        width:100%;
        height: 100%;
        border-radius: 10px;
        padding: 0;

        background: #f0f2f5;
        padding: 2.4rem;

    >.form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

    >.form form{
        width: 100%;
    }
    
    >.form h2{
        padding : 10px 20px;
        font-size: 2rem;
        width: 80%;
        border-bottom: 1px solid grey;
        margin: 0 auto;
    }

    >.form form .input-group{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        
        margin-top: 50px;
        width: 100%;
        
        >label{
            font-size: 24px;
            font-weight: 700;
        }

        >.text-input{
            width: 90%;
            height: 32px;
            margin-left: 5px;
        }
    }

    >.form form .actions{
        display: flex;
        align-items: center;
        justify-content:space-evenly;
        width: 100%;
        height: 100%;

        >a {
            display: flex;
            align-items: center;
            justify-content:center;

            width: 130px;
            height: 60px;
            border: 1px solid darkred;
            color: darkred;
            background: #f0f2f5;
            text-decoration: none;

            border-radius: 14px;

            &:hover{
                background: darkred;
                border: 1px solid #f0f2f5;
                color: #f0f2f5;
            }
        }
        >button {
            width: 130px;
            height: 60px;
            color: #fff;
            background: #422435;
            border-radius: 14px;
            border:none;
            
            cursor: pointer;

            &:hover{
                background: #31081F;
            }
        }
    }
}
`;
