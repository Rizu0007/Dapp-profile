import "./App.css";
import Header from './components/Header'
import {Routes , Route} from 'react-router-dom'
import Swap from './components/Swap'
import Token from './components/Tokens'


function App() {

  return(
  
  <div className="App">
<Header/>

<div className="mainWindow" >
<Routes>
<Route path="/" element={<Swap/>}/>
<Route path="/" element={<Token/>}/>
<h1>hell .
</h1>
</Routes>

</div>
  </div>
  );
}

export default App;
