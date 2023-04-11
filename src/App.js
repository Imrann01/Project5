
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AutoSlider from './Components/AutoSlider';
import Slide1 from './Components/Slide1';
import Slide2 from './Components/Slide2';
import Slide3 from './Components/Slide3';
import Slide4 from './Components/Slide4';
import Slide5 from './Components/Slide5';
import Slide6 from './Components/Slide6';
import CategoryContent from './Categories-list/CategoryContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AutoSlider />} />
        <Route path="/slide1" element={<Slide1 />} />
        <Route path="/slide2" element={<Slide2 />} />
        <Route path="/slide3" element={<Slide3 />} />
        <Route path="/slide4" element={<Slide4 />} />
        <Route path="/slide5" element={<Slide5 />} />
        <Route path="/slide6" element={<Slide6 />} />

        <Route path="/category1" element={<CategoryContent category="Category 1" />} />
        <Route path="/category2" element={<CategoryContent category="Category 2" />} />
        <Route path="/category3" element={<CategoryContent category="Category 3" />} />
        <Route path="/category4" element={<CategoryContent category="Category 4" />} />
        <Route path="/category5" element={<CategoryContent category="Category 5" />} />
      </Routes>

      <nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/category1" onClick={() => window.open('/category1', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600')}>Category 1</Link></li>
    <li><Link to="/category2" onClick={() => window.open('/category2', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600')}>Category 2</Link></li>
    <li><Link to="/category3" onClick={() => window.open('/category3', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600')}>Category 3</Link></li>
    <li><Link to="/category4" onClick={() => window.open('/category4', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600')}>Category 4</Link></li>
    <li><Link to="/category5" onClick={() => window.open('/category5', '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600')}>Category 5</Link></li>
  </ul>
</nav>

    </Router>
  );
}

export default App;





/*import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AutoSlider from './Components/AutoSlider';
import Slide1 from './Components/Slide1';
import Slide2 from './Components/Slide2';
import Slide3 from './Components/Slide3';
import Slide4 from './Components/Slide4';
import Slide5 from './Components/Slide5';
import Slide6 from './Components/Slide6';
import Category1 from './Categories-list/Category1';
import Category2 from './Categories-list/Category2';
import Category3 from './Categories-list/Category3';
import Category4 from './Categories-list/Category4';
import Category5 from './Categories-list/Category5';

function handleCategoryClick(url) {
  window.open(url, '_blank', 'width=600,height=400');
}

function App() {
  return (
    <Router>     
      <Routes>
        <Route path="/" element={<AutoSlider />} />
        <Route path="/slide1" element={<Slide1 />} />
        <Route path="/slide2" element={<Slide2 />} />
        <Route path="/slide3" element={<Slide3 />} />
        <Route path="/slide4" element={<Slide4 />} />
        <Route path="/slide5" element={<Slide5 />} />
        <Route path="/slide6" element={<Slide6 />} />
        <Route path="/category1" element={<Category1 />} />
        <Route path="/category2" element={<Category2 />} />
        <Route path="/category3" element={<Category3 />} />
        <Route path="/category4" element={<Category4 />} />
        <Route path="/category5" element={<Category5 />} />
      </Routes>
      
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><button onClick={() => handleCategoryClick('/category1')}>Category 1</button></li>
          <li><button onClick={() => handleCategoryClick('/category2')}>Category 2</button></li>
          <li><button onClick={() => handleCategoryClick('/category3')}>Category 3</button></li>
          <li><button onClick={() => handleCategoryClick('/category4')}>Category 4</button></li>
          <li><button onClick={() => handleCategoryClick('/category5')}>Category 5</button></li>
        </ul>
      </nav>
    </Router>
  );
}


export default App; */
