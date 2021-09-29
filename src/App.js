import './App.css';
// import Card from './components/Card';
import MatchButton from './components/Buttons/MatchButton';

function App() {
  //Custom functions
  const add = (a, b) => a + b;
  const deadd = (a, b) => a - b;
  return (
    <div className='App'>
      <h5>REACT </h5>
      {/* <Card name='testas' email='test@test.test' age={1} expires={1} />  // 2scenarios */}
      {/* <Card name='testas' email='test@test.test' age={'1'} expires={+'1'} /> */}
      <p>-----------------------------------</p>
      <u>Button propTypes exercise passing props on Types checking </u>
      <p>-----------------------------------</p>
      <MatchButton text='+' action={add} numbers={[4, 5]} />
      <MatchButton text='+' action={deadd} numbers={[8, 5]} />
    </div>
  );
}

export default App;
