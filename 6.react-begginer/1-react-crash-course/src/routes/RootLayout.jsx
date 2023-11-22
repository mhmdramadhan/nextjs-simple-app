import { Outlet } from 'react-router-dom';

import MainHeader from '../components/MainHeader';

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      {/* children component ditaruh disini */}
      <Outlet />
    </>
  );
};

export default RootLayout;
