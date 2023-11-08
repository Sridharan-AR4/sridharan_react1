//import './App.css';
//import Navbar from './components/Navbar';
//import Main from './components/Main';
//import Footer from './components/Footer'; 
//import Buttons from './components/Buttons';
import Counter from './day3/Counter';
import DynamicRendering from './day3/DynamicRendering';
import TogglMessage from './day3/TogglMessage';
import Pah from './day3/Pah';
import Cricketscore from './day3/Cricketscore';

function App() {
  return(
<>
{/*  <div>
   <Navbar></Navbar>
  <Main></Main>
  <Footer></Footer>
  </div>
  <div>
  <Buttons label="green" color="green"/>
  <Buttons label="yellow" color="yellow"/>
  <Buttons label="red" color="red"/>
  </div> */}
  <div className="flex space-x-4 my-4">
  <TogglMessage />
  <DynamicRendering />
  <Counter />
  <Pah />
  </div>
  <div className="flex space-x-4 my-4">
  <Cricketscore/>
  </div> 
  </>
  );
}

export default App;