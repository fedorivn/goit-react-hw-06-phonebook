
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Form from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { Container, Title, Subtitle } from './App.styled';
import { FilterList } from '../FilterList/FilterList';




export default function App() {
  

  return (
    <Container>
      <ToastContainer position="top-center" theme="colored" />
      <Title>PhoneBook</Title>
      <Form  />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <FilterList
      />
    </Container>
  );
}


