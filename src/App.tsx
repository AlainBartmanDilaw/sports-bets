import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Menu from './Menu';

const App: React.FC = () => {
  const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
      children: [
        {
          title: 'Team',
          url: '/about/team',
          children:[
            {
              title: 'A',
              url: '/about/a',
            },
            {
              title: 'B',
              url: '/about/b',
            },
          ]
        },
        {
          title: 'History',
          url: '/about/history',
        },
      ],
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ];

  return (
      <div>
        <Menu menuItems={menuItems} />
      </div>
  );
};


export default App;
