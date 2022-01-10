import React from 'react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

const Layout: React.FC = (props) => {
  return (
    <div className="bg-[#20252B] flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
