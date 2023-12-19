import Header from '../../components/Header/index.js';
import NavBar from '../../components/NavBar/index.js';
import Footer from '../../components/Footer/index.js';
import { ReactElement } from 'react';

interface NavigationLayoutProps {
  children: ReactElement<any, any>;
}

const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  return (
    <div className="navigation-layout">
      <Header />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default NavigationLayout;
