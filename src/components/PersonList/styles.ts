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

export const MenuOverlay = styled.div`
    width: 100%;
    height: 100%;

    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 2;

    >.menu{
        width:30%;
        height: 500px;
        border-radius: 10px;
        padding: 0;

        background: #f0f2f5;
        padding: 2.4rem;

        position: relative;
        z-index: 1;

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
}
`;