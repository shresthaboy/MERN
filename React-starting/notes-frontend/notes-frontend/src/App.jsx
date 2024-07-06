import axios from 'axios';
import {useState} from 'react';

const App = () => {

  const [shownote, setShowNote] = useState("")

    const promise = axios.get('http://localhost:3001/notes');
  
    promise.then(response =>{
      setShowNote = response.data;
      setShowNote(shownote)
      
    })
  return (
    <div>
      <p>{shownote}</p>
    </div>
  );
}

export default App;
