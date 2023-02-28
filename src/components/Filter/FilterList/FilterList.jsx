import React from 'react';

import { useSelector } from 'react-redux';

import { ContactItem } from '../FilterListItem/FilterListItem';
import { ContactsList } from './FilterList.styled';

export const FilterList = () => {

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(({ name}) =>
  name.toLowerCase().includes(filter)
);

 
  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number })=> (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
  
        />
      ))}
    </ContactsList>
  );
};
