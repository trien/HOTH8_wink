import React from 'react';
import Page from '../components/page';

import ItemList from '../components/itemList';

export default function MainPage() {
  return (
    <React.Fragment>
        <Page title="Welcome">
          <ItemList />
        </Page>
    </React.Fragment>
  );
}