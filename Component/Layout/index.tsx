import React from 'react'
import {Layout} from 'antd'
import { LayoutWrapper } from './style';
import HeaderComponent from "../Header"

interface LayoutChildren {
    children: React.ReactNode
}
const LayoutComponent = ({children}: LayoutChildren) => {
    const {Content} = Layout;
    return (
        <LayoutWrapper>
           <HeaderComponent />
           <Content>{children}</Content> 
        </LayoutWrapper>
    )
}

export default LayoutComponent;
