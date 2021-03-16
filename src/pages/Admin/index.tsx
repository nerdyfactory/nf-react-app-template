import React, { Fragment } from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { Admin as AdminContainer, Resource, ListGuesser, Layout, LayoutComponent } from 'react-admin';
import AdminAppBar from './AdminAppBar';

const MyLayout: LayoutComponent = (props) => <Layout {...props} appBar={AdminAppBar} />;

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
export function Admin() {
  return (
    <Fragment>
      <AdminContainer layout={MyLayout} dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
      </AdminContainer>
    </Fragment>
  );
}

Admin.propTypes = {};
