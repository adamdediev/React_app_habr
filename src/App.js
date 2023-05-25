import Post from './component/Post';
import Header from './component/Header';
import './style/App.css';


const App = () => {
  return(
    <div className='container'>
     <Header/>
     <Post/>
    </div>
  )
  
};

export default App;