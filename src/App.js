import logo from './logo.svg';
// import './App.css';
import TodoFeature from './features/Todo'
import AlbumFeature from './features/Album'
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
     <TodoFeature />
     <AlbumFeature />
     <AlbumFeature />
     <AlbumFeature />
     <Footer />
    </div>
  );
}

export default App;
