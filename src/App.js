import Item from './components/item';
import Card from './components/card';

const App = () => {
  return(
  <>
  <h1>Aplicação com React</h1>
  <ul>
  
  <Item texto='item1' />
  <Item />
  <Item />
  
  
  </ul>
  <Card />
  </>
  )
}

export default App;
