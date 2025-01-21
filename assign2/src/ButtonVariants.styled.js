import styled from "styled-components";

export const ButtonView=styled.button`
    background-color:${(props)=>props.bg || "#fff"};
    color:${(props)=>props.color || "#000"};
    border-color: #000;
    border:${(props)=>props.border}
`;