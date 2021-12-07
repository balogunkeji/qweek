import React from 'react'
import { Layout } from "antd";
import { HeaderLayoutWrapper } from './style';

function HeaderComponent() {
    const {Header} = Layout;
    return (
        <HeaderLayoutWrapper>
           <Header>
               hello
           </Header> 
        </HeaderLayoutWrapper>
    )
}

export default HeaderComponent;
