import { useEffect, useState } from "react";
import { Content } from "./components/Content";
import { onSnapshot, collection } from 'firebase/firestore';
import { database } from './firebaseConfing';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    onSnapshot(collection(database, 'articles'), (snapshot) => {
      setArticles(snapshot.docs.map((item) => {
        return { ...item.data(), id: item.id }
      }))
    })
  }, []);


  return (
    <div className="App">
      <Content articles={articles}/>
    </div>
  );
}

export default App;
