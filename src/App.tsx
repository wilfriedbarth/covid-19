import React from 'react';
import { Provider } from 'jotai';
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { AllChartContainer, SelectNumberDays } from 'components/Historical';

function App() {
  return (
    <ReactQueryCacheProvider queryCache={new QueryCache()}>
      <ReactQueryDevtools />
      <Provider>
        <SelectNumberDays />
        <AllChartContainer />
      </Provider>
    </ReactQueryCacheProvider>
  );
}

export default App;
