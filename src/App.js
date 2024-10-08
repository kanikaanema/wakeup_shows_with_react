import './App.css';
import { Route, Routes} from 'react-router-dom';
import Root from "./components/Root/Root"
import Shows from './components/Shows/Shows';
import { ShowsContextProvider } from './Context/context';
import SearchResult from './components/SearchResults/SearchResults';


function App() {


  return (
    <ShowsContextProvider>
        <Routes>
          <Route path='/' element={<Root />}>
            <Route path='shows' element={<Shows />} />
            <Route path='search-result' element={<SearchResult />} />
          </Route>
        </Routes>
    </ShowsContextProvider>
  )
}

export default App;
