import React, { Fragment } from 'react';
import jsonServerProvider from 'ra-data-json-server';
import useBootstrap from 'hooks/useBootstrap';
import { Admin as AdminContainer, Resource, ListGuesser } from 'react-admin';
// import AdminHeader from './AdminHeader';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
export function Admin() {
  const [theme] = useBootstrap();
  return (
    <Fragment>
      <AdminContainer
        dataProvider={dataProvider}
        title="Example Admin"
        theme={theme} // Add your theme to react-admin
      >
        <Resource name="users" list={ListGuesser} />
      </AdminContainer>
    </Fragment>
  );
}

Admin.propTypes = {};
