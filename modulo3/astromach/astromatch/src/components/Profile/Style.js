import styled from "styled-components";

export const BoxContainer = styled.div`
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
export const HeaderMain = styled.div`
    height: 50px;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
`
export const HeaderImg = styled.img`
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`
export const HeaderImg2 = styled.img`
    width: 2.25rem;
    height: 2.25rem;  
`
export const ContainerProfile = styled.div`
    padding: 20px 20px 0px;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    justify-content: flex-end;
`
export const ImgProfile = styled.img`
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    height: 430px;
    animation: 0.5s ease 0s 1 normal forwards running none;
    display: flex;
    align-items: center;
`
export const TextProfile = styled.div`
    height: 30%;
    position: absolute;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px;
`
export const NameProfile = styled.div`
    font-weight: bold;
    font-size: 24px;
    max-height: 25%;
`   
