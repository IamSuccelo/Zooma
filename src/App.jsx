import Nav from './route/navigation/navigation';
import { Route,Routes } from 'react-router-dom';
import Home from './route/Home/home';

let App = ()=>{
  return(
      <div>
      <Routes>

        <Route path='/' element={<Nav/>}>

        <Route index element={<Home/>}/>

        
        </Route>
    </Routes>
      </div>

  )
}

export default App;