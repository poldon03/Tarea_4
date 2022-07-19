import ListContact from './components/ListContact'
import NewContact from './components/NewContact'
import { useRef } from 'react'
function App() {
  const instance = useRef(null);

  function reloadData() {
    instance.current.getData();
  }
  return (
    <div className='body'>
      <h1 style={{ marginLeft: 20 }}>Agenda Multicapas</h1>
      <NewContact reloadData={reloadData} />
      <ListContact ref={instance} />
    </div>
  );
}

export default App;
