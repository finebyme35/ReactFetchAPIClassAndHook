import { Route, Routes } from "react-router";
import Album from "./components/component/Album";
import Comment from "./components/component/Comment";
import Home from "./components/component/Home";
import Photo from "./components/component/Photo";
import Post from "./components/component/Post";
import Todo from "./components/component/Todo";
import User from "./components/component/User";
import Toolbar from "./components/Toolbar";



function App() {
  return (
    <>
       <Toolbar />

       <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Post />} />
            <Route path='/todos' element={<Todo />} />
            <Route path='/users' element={<User />} />
            <Route path='/photos' element={<Photo />} />
            <Route path='/comments' element={<Comment />} />
            <Route path='/albums' element={<Album />} />
          </Routes>
       </div>
    </>
  );
}

export default App;
