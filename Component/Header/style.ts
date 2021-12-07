import styled from "styled-components";

export const HeaderLayoutWrapper = styled("div")`

width: 100%;
height: 100%;
max-width: 100%;


    .ant-layout-header{
     height: 75px;
     background: #EEEFF0 !important;
     position: fixed;
     width: 100%;
     z-index: 1;
     padding: 5px 30px 10px 30px;

     @media(max-width:1000px){
      width: 100%;
      padding: 5px 5px 10px 5px;
     }
 }
`;