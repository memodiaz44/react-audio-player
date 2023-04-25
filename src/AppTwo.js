import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import Login from './Components2/login'
import Singin from "./Components2/Signup";
import Navbar from "./Components2/Navbar"
import ExersisesList from "./Components2/exercises-list"
import EditExercises from './Components2/edit-exercises'
import CreateExercises from "./Components2/create-exercise"
import CreateUsers from "./Components2/create-user"
import { BrowserRouter as Router,
    Routes,
Route,
Link
} from "react-router-dom"




const AppTwo = () => {

return(
    <>
<Router>
<div className="name">
    <h1></h1>

    <Routes>
    <Route  path="/">
   
    <Route path="/edit:id" element={<EditExercises/>}/>
    <Route path="/create" element={<CreateExercises/>}/>
    <Route path="/user" element={<CreateUsers/>}/> 
    <Route path="/login" element={<Login/>}/>
    <Route path="/sign" element={<Singin/>}/>
    <Route path="/content" element={<App/>}/>
    </Route>
           
   
    
        
        </Routes>
        

</div>

</Router>
</>
)



}


export default AppTwo

{/* <Route path="/edit:id" element={<EditExercises/>}/>
<Route path="/crete" element={<CreateExercises/>}/>
<Route path="/user" element={<CreateUsers/>}/>  */}