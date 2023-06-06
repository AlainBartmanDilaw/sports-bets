import React from 'react';
import { Colors } from './components/Colors';

// export const headerStyle: React.CSSProperties = {
//     textAlign: 'center',
//     color: '#0000ff',
//     height: '10%',
//     paddingInline: 150,
//     // lineHeight: '64px',
//     backgroundColor: Colors.white(),
//     lineHeight: 1,
//     paddingTop: 5,
// };
const headerBackgroundColor = Colors.blueGray();
export const headerStyle = {
    backgroundColor: headerBackgroundColor,
    height:"100%",
    margin:"16px",
    padding:"0",
};

const contentLayoutStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 100,
    height: '80%',
    // lineHeight: '120px',
    color: '#6666c0',
    // backgroundColor: '#108ee9',
};

const layoutStyle: React.CSSProperties = {
    textAlign: 'center',
    // minHeight: 100,
    // lineHeight: '120px',
    height: '20%',
    color: '#6666c0',
    // backgroundColor: '#108ee9',
};

export const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    // lineHeight: '120px',
    color: 'rgba(255,255,255,0.29)',
    // backgroundColor: '#99a920',
    width: '10%',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#441b1b',
    // backgroundColor: '#12c4a8',
    height: '10%',
    lineHeight: 0,
    alignSelf: 'center',
};

export const iconStyle = {
    fontSize:"inherit"
};

export const menuStyle = {
    backgroundColor: headerBackgroundColor,
    fontSize:"1.5em",
    lineHeight:"calc(1.3em + 8px)",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.03)",
};

