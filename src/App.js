import './App.css';
import { Route, BrowserRouter, Routes, HashRouter, } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Root from "./components/Root/Root"
import Shows from './components/Shows/Shows';
import { ShowsContextProvider } from './Context/context';
import SearchResult from './components/SearchResults/SearchResults';


function App() {


  return (
    <ShowsContextProvider>

      <HashRouter>
        <Routes>
          <Route path='/' element={<Root />}>
            <Route path='shows' element={<Shows />} />
            <Route path='search-result' element={<SearchResult />} />
          </Route>

        </Routes>
      </HashRouter>

    </ShowsContextProvider>
  )
}

export default App;
