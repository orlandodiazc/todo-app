import { Route, Routes } from 'react-router-dom';

import About from '../routes/About';
import Home from '../routes/Home';
import NotMatch from '../routes/NotMatch';
import Profile from '../routes/Profile';
import Layout from './Layout';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<Profile />} />
    </Route>
    <Route path="*" element={<NotMatch />} />
  </Routes>
);
export default TodoApp;
