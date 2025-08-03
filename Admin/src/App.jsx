import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './pages/Home';
import CreateCategory from './component/CreateCategory';
import CategoryList from './component/CategoryList';
import EditCategory from './component/EditCategory';
function App() {
const router= createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      { index: true, Component: CreateCategory },
      { path: "/createCategoy", Component: CreateCategory },
      { path: "/categoryList", Component: CategoryList },
      { path: "/editCategory/:id", Component: EditCategory },
    ]
  },
]);

  return (
    <>
      <RouterProvider router={router} />,
    </>
  )
}

export default App
