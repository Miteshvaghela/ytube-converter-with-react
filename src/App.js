import './App.css';
import ConvertForm from './components/ConvertForm';

function App() {
  return (
    <div className="App mx-aut vw-100 vh-100">
      <div className="row">
        <div className="columns-1">
            <h2 className="text-5xl font-bold text-center my-4 py-4">Youtube Converter.</h2>
        </div>
      </div>
      <ConvertForm />
 
    </div>
  );
}

export default App;
