import React from 'react';
import { Provider } from 'jotai';
import { SelectNumberDays, AllChartContainer } from 'components/Historical';

function Page1() {
  return (
    <Provider>
      <SelectNumberDays />
      <AllChartContainer />
    </Provider>
  );
}

export { Page1 };
