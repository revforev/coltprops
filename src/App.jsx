import './App.css';
import ListPicker from './ListPicker.jsx';

function App() {
  return (
    <div>
      <ListPicker values={[1, 2, 3]}></ListPicker>
      <ListPicker values={['a', 'b', 'c']}></ListPicker>
    </div>
  );
}

export default App;
