import { 
  createBrowserRouter,
  RouterProvider 
} from "react-router-dom"

import TemplateDefault from "./templates/Default"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  }
])

const App = () => {
  return (
    <TemplateDefault>
      <RouterProvider router={router}/>
    </TemplateDefault>
 )
}

export default App
