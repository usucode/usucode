import React from 'react';
import Header from '~/components/Header';

const Layout: React.FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
