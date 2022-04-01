import logo from './logo.svg';
import './App.css';
import Address from './Profile/Components/Adress';
import FullName from './Profile/Components/FullName';
import Photo from './Profile/Components/ProfilePhoto';
import Adress from './Profile/Components/Adress';
import ProfilePhoto from './Profile/Components/ProfilePhoto';

function App() {
  return (
    <div>
      <h1 style={{backgroundColor: 'green',margin:35}}>PROPS TCHECKPOINT</h1>
      <FullName fullname= 'PAUL TCHANGAI'/>
      <Adress adress= 'CITE AVION OUAKAM'/>
      <ProfilePhoto profilephoto= 'PHOTO'/>
    </div>
  );
}

export default App;
