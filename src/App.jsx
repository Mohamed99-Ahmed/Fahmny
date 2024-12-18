import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LayOut from "./pages/LayOut/LayOut"
import Tazkarh from "./pages/Tazkarh/Tazkarh"
import Choose from "./pages/Choose/Choose"
import { Provider } from 'react-redux';
import Store from "./Redux/Store"
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  // Make Route of Layout and put all Component as children in it
const routes = createBrowserRouter([{path:"", element:<LayOut/>,
  children:[
    {path:"/", element:<Tazkarh/>},
    {path:"/tazkarh", element:<Tazkarh/>},
    {path:"/choose", element:<Choose/>},
    {path:"*", element:<NotFound/>}
  ]
}])

  return (
    <>
    {/* Make a provider that provide all application with store Redux */}
      <Provider store={Store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </>
  )
}

