import React from 'react';
import PropTypes from 'prop-types';
import { Admin as AdminContainer, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function Admin(props) {
  return (
    <AdminContainer dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </AdminContainer>
  );
}

Admin.propTypes = {};

export default Admin;
