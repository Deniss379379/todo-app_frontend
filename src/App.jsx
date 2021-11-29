import React from 'react';
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './library/Container/Container.jsx';
import { AddItem } from './features/AddItem';
import { ViewItems } from './features/ViewItems';
import { fetchItems } from "./reducers/items";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
  <Container 
    >
    <Container>
  <AddItem  />
    </Container>
   <Container
    >
   <ViewItems />
    </Container>
  </Container>
  )
}

export { App };
