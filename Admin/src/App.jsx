import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/Home';
import CreateCategory from './component/CreateCategory';
function App() {
const router= createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      { index: true, Component: CreateCategory },
      { path: "/createCategoy", Component: CreateCategory },
    ],
  },
]);

  return (
    <>
      <RouterProvider router={router} />,
    </>
  )
}

export default App
