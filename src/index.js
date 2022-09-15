import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import CountriesChart from 'components/CountriesChart';
import COUNTRIES from 'constants/countries';
import COUNTRIES_LIMIT from 'constants/limit';
import routes from 'constants/routes';
import Header from 'components/Header';
import DummyPage from 'components/DummyPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Header />
      <Box sx={{ p: 2 }}>
        <Switch>
          <Route
            exact
            path={routes.COUNTRIES}
            component={() => <CountriesChart countries={COUNTRIES} limit={COUNTRIES_LIMIT} />}
          />
          <Route exact path={routes.DUMMY_PAGE} component={DummyPage} />
        </Switch>
      </Box>
    </BrowserRouter>
  </React.StrictMode>,
);
