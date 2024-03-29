import Layout from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import { lazy } from 'react';

const TeachersPage = lazy(() => import('pages/TeachersPage/TeachersPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
