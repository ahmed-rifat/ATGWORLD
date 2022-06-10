import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Component/Card/Card';
import Banner from './Component/Headers/Banner/Banner';
import Headers from './Component/Headers/Headers';
import PostBar from './Component/PostBar/PostBar';

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Banner></Banner>
      <PostBar></PostBar>
      <hr />
      <Card></Card>
      
    </div>
  );
}

export default App;
