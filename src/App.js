import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Blog from './pages/blog';
import Blogs from './pages/blogs';

function App() {
  return (
    <Routes>
    {/* <Route path="/" element={<Navigate to="/hello" />} /> */}
    {/* <Route path="/hello/*" element={<Hello />}>
      <Route path="world" element={<p>This is world!</p>} />
    </Route> */}
     <Route path="/" element={<Home />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/blogs/:blogId" element={<Blog />} />
    {/* <Route path="/posts/:postId" element={<Post />} /> */}
  </Routes>
  );
}

export default App;
