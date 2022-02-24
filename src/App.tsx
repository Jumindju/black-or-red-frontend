import React from 'react';
import { AppInsightsContext, AppInsightsErrorBoundary } from '@microsoft/applicationinsights-react-js';
import { reactPlugin } from './helper/app-insights';

import Header from './components/header/Header';

const ErrorView = () => (
  <h1>Something went wrong</h1>
);

function App() {
  return (
    <AppInsightsContext.Provider value={reactPlugin}>
      <AppInsightsErrorBoundary appInsights={reactPlugin} onError={ErrorView}>
        <Header />
      </AppInsightsErrorBoundary>
    </AppInsightsContext.Provider>
  );
}

export default App;
