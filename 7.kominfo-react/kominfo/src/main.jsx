import React from 'react';
import ReactDOM from 'react-dom/client';

// css
import './assets/css/animate.css';
import './assets/css/bootstrap.css';
import './assets/css/color.css';
import './assets/css/flaticon.css';
import './assets/css/font-awesome-all.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/nice-select.css';
import './assets/css/owl.css';
import './assets/css/responsive.css';
import './assets/css/rtl.css';
import './assets/css/style.css';
// end css

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './pages/Menu';
import { Layanan } from './pages/Layanan';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
  },
  {
    path: '/layanan-tte',
    element: <Layanan />,
  },
  {
    path: '/kontak',
    element: <>Kontak</>,
  },
  {
    path: '/cek-keaslian-ttd',
    element: <>Cek keaslian pdf tanda tangan</>,
  },
  {
    path: '/dokemen',
    element: <>Dokemen</>,
  },
  {
    path: '/berita',
    element: <>Berita</>,
  },
  {
    path: '/medsos',
    element: <>Media Sosial</>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
