import './App.css';
import { RouterProvider, Route, createRoutesFromElements, } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Root from "./components/Root/Root"
import Shows from './components/Shows/Shows';
import { ShowsContextProvider } from './Context/context';
import SearchResult from './components/SearchResults/SearchResults';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route path='/Shows' element={<Shows />} />,
        <Route path='/search-result' element={<SearchResult />} />
      </Route>
    )
  )

  return (
    <ShowsContextProvider>

      <RouterProvider router={router} />

    </ShowsContextProvider>
  )
}

export default App;
