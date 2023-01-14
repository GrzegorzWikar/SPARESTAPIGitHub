import './App.css';
import Filters from './components/filtesr';
import Pagination from './components/pagination';
import Tabele from './components/table';

function App() {
  return (
    <div className="App">
      <Filters />
      <Tabele />
      <Pagination />
    </div>
  );
}

export default App;
