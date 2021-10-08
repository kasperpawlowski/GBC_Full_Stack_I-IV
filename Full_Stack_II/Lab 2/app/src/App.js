import logo from './logo.svg';
import './App.css';
import Student from './components/student';
import College from './components/college';

function App() {
  return (
    <>
      <Student name="Rick Rude" number="11111" enrolled="1,2,3"/>
      <Student name="Shawn Michaels" number="22222" enrolled="4"/>
      <Student name="Bret Hart" number="33333" enrolled="5,6"/>
      <College name="George Brown" location="Casa Loma" />
    </>
  );
}

export default App;
