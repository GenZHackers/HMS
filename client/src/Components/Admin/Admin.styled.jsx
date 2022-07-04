import styled from "styled-components"

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
    padding: 0;
    margin: 0;
    /* min-height: 100vh; */
`

export const LeftBar = styled.div`
    width: 100%;
    /* display: grid; */
    background-color: #0048b2;
    color: white;
    padding: 100px 20px 10px;
    gap: 10px;
    height: 100vh;
    box-sizing: border-box;


    .action{
        display: flex;
        align-items: center;
        gap: 1px;
        padding: 15px 10px;
        border-radius: 10px;
        transition: all .3s;
        cursor: pointer;

        h3{
            font-size: 18px;
            font-weight: 300;
        }
    }

    .action:hover{
        background-color: rgb(0,0,0,0.1);
    }
`

export const RightBar = styled.div`
    padding: 50px;
    h2{
        color: #0048b2;
        padding: 10px 0;
    }
`

export const Form = styled.form`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;

    input, select{
        padding: 12px;
        border: none;
        border-bottom: 2px solid #0048b2;
        font-size: 15px;
    }

    input::placeholder{
        color: rgb(200,200,200);
    }

    select::placeholder{
        color: rgb(200,200,200);
    }

    input:focus{
        outline: none;
    }

    select:focus{
        outline: none;
    }
`