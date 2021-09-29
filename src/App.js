import './App.css';
// import Card from './components/Card';
import MatchButton from './components/Buttons/MatchButton';
import MessageButton from './components/Buttons/MessageButton';
import Greeting from './components/Greeting';

import Book from './components/helpers/Books';
// import AnotherBook from './components/helpers/Books';

import Accountcard from './components/AccountCard';
import CounterButton from './components/Buttons/CounterButton';
import Button from './components/Buttons/Button';

function App() {
  //Custom functions
  const add = (a, b) => a + b;
  const deadd = (a, b) => a - b;

  //
  //////////////////////   Creating Book
  const harryPotter = new Book('Harry Potter', 'J.K.Rowling');
  // const harryPotter2 = new AnotherBook('Harry Potter2', 'J.K.Rowling');
  //from Book class instanceOf

  ///////////////////////
  return (
    <div className='App'>
      <h5>REACT </h5>
      {/* <Card name='testas' email='test@test.test' age={1} expires={1} />  // 2scenarios */}
      {/* <Card name='testas' email='test@test.test' age={'1'} expires={+'1'} /> */}
      <hr />
      <u>Button propTypes exercise passing props on Types checking </u>
      <hr />
      <MatchButton text='+' action={add} numbers={[4, 5]} />
      <MatchButton text='+' action={deadd} numbers={[8, 5]} />

      <p>------MESSAGE BUTTON---------</p>
      {/* <MessageButton message={<p>Hellow World</p>} /> */}
      {/* <MessageButton message={<Greeting />} /> */}
      {/* <MessageButton message={<Greeting />} book={harryPotter} /> */}
      <MessageButton
        message={<Greeting />}
        book={harryPotter}
        showText='Show Message'
        hideText='Hide Message'
      />
      <hr />
      <Accountcard
        user={{
          name: 'Homer',
          surname: 'Simpson',
          email: 'homer@simpsons.com',
          age: 37,
          friends: ['Barney', 'Lenny', 'Carl', 'Mo'],
        }}
      />
      <hr />
      <CounterButton value={[4, 5, 5, 20, 50, 80]} />
      <hr />
      <Button action={() => console.log('Hellow101!')} />
      <Button text='Click Me Too!' action={() => console.log('Hellow1011!')} />
      <hr />
      <Button text='Please,click me' />
      <Button />
    </div>
  );
}

export default App;
