import styled from "styled-components";

export const LayoutWrapper = styled.div`
     width: 100%;
    height: 100%;
    overflow-x: hidden;
    .ant-layout-content {
    width: calc(100% - 200px);
    height: max-content;
    margin: 70px 0 0 200px;
    min-height: calc(100vh - 70px);
    background-color: #f3f3f3;

    @media (max-width: 1000px) {
      width: 100%;
      margin-left: 70px;
    }
    @media (max-width: 800px) {
      width: 100%;
      margin-left: 0;
    }
  }
`