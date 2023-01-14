import './App.css';
import Filters from './components/Filtesr';
import Tabele from './components/Table';

const App: React.FC = () => {
return (
  <div className="App">
    <Filters />
    <Tabele />
  </div>
);
}

export default App;
