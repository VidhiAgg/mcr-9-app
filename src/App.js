import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SideNavigationBar from './Components/SideNavigationBar';
import CategoryWiseVideo from './pages/CategoryVideoes/CategoryWiseVideo';
import Explore from './pages/Explore/Explore';
import WatchLaterPage from './pages/WatchLater/WatchLaterPage';

function App() {
  return (
    <div className="App">
      <SideNavigationBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/explore" element={<Explore/>}></Route>
        <Route path="/watchLater" element={<WatchLaterPage/>}></Route>
        <Route path="/category/:category" element={<CategoryWiseVideo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
