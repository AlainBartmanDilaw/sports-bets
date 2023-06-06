import { ConfigProvider, theme } from 'antd';
import React from 'react';
import { Colors } from './Colors';

interface Props {
    children: any;
}

// const ThemeProvider:React.FC<{}> = ({children}: any) => {
const ThemeProvider: React.FC<Props> = ({children}) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: Colors.darkBlue(),
                    colorBgLayout: Colors.white(),
                }
            }}>
            {children}
        </ConfigProvider>
    )
}
export default ThemeProvider;
