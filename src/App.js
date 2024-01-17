import 'bootstrap/dist/css/bootstrap.min.css';

import TsNavBar from "./components/TsNavBar";
import TsHeader from './components/TsHeader';
import TsCards from './components/TsCards';

function App() {
  return (
    <div className="App">
      <TsNavBar/>
      <TsHeader/>
      <TsCards 
        imgUrl= {'https://www.zooplus.be/magazine/wp-content/uploads/2019/01/AdobeStock_363350864.jpg'} 
        title= {"Chow Chow"}
        text= {"The Chinese stubborn, but loyal teddy bear with the unique black-blue tongue."}
      />
      <TsCards 
        imgUrl= {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsE2g_P_cSTlFsyJvAfvbnBbLey0Ey_9Uo1g&usqp=CAU'} 
        title= {"American Akita"}
        text= {"The ancient Japanese breed known for its dignity, courage and extreme loyalty."}
      />
      <TsCards 
        imgUrl= {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOy_kbc5QqnYcAbmgdWHDVyGYYXhnW8mhUXmf642IBqXEbZs3tz_mESrHYtcmT16HjEU&usqp=CAU'} 
        title={"French Bulldog"}
        text= {"The grumpy Frenchie, known for its playfulness and affection."}
      />
    </div>
  );
}

export default App;
