// eslint-disable-next-line
import Initials from './Initials/Initials';
// eslint-disable-next-line
import DayOfWeek from "./DayOfWeek/DayOfWeek"
// eslint-disable-next-line
import Article from "./Article/Article"
// eslint-disable-next-line
import Menu from "./Menu/Menu"
import MenuItem from "./Menu/MenuItem/MenuItem"
// eslint-disable-next-line
import Counter from "./Counter/Counter"
// eslint-disable-next-line
import StudentPicker from "./StudentPicker/StudentPicker"
// eslint-disable-next-line
import RandomColorSquare from "./RandomColorSquare/RandomColorSquare";
import './App.css';

function App() {
    
    // eslint-disable-next-line
    function clickHandler() {
        console.log('you clicked');
        }
 
    return (
        <div>
            {/* <button onClick={clickHandler}>Click me</button> */}
            {/* <Counter /> */}
            {/* <StudentPicker/> */}
        
        
        
        <Menu>
            <MenuItem> <a href="/" className="home">Homepage</a></MenuItem>
            <MenuItem> <a href="/" className="gallery">Gallery</a></MenuItem>
            <MenuItem> <a href="/" className="contact">Contact</a></MenuItem>
        </Menu>
        
                
            
            <div>
            <RandomColorSquare>

            </RandomColorSquare>
            </div>
        
        {/*<Initials name='Ron Mikles'/>*/}
        {/*<DayOfWeek day={1}/>*/}
        {/*  <Article title='Bla Bla' Content='Bla Bla Bla?'/>*/}
        </div>
    );
    }

export default App;
