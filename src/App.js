import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Subjects from './Components/Subjects';


function App() {
  return (
   <>
   <Navbar name ='Req Name' id = 'Req your ID'/>
   <div className='hero-section'>
   <Sidebar/>
   <Subjects/>
   </div>
   </> 
  );
}

export default App;
