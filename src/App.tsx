import { BrowserRouter,Routes,Route } from "react-router-dom";
import LoginPage from "./Loginpage";
import ForgotId from "./Forgotid";
import Form from './Form'

const App = () => {
  return (
<BrowserRouter>

<Routes>
  <Route path="/" element={<LoginPage/>}/>
  <Route path="/Forgotid" element={<ForgotId/>}/>
  <Route path="/Form" element={<Form/>}/>
</Routes>
</BrowserRouter>
    
  )
}
export default App;
