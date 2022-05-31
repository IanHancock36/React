
import './App.css';
import Title from './components/Title';

function App() {
  const subtitle = "this is the subtitle"
  return (
    <div className="App">
<Title subtitle={subtitle} title='events in the area'/>
<Title subtitle='another subtile' title='another title'/>
    </div>
  );
}

export default App;
