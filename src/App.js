import Navbar from './components/Navbar';
import BlogPage from './containers/BlogContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './shared.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BlogPage />
    </div>
  );
}

export default App;
