import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './pages/Menu';
import { Layanan } from './pages/Layanan';
import Beranda, {loader as loaderBeranda} from './pages/Beranda';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
  },
  {
    path: '/beranda',
    element: <Beranda />,
    loader: loaderBeranda
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
