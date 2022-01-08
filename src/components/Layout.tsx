import React from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const Layout: React.FC = (props) => {
  return (
    <div className="bg-[#20252B]">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
