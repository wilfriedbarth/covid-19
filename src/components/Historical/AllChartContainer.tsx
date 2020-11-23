import React from 'react';
import { useAtom } from 'jotai';
import { daysAtom } from './viewState';
import { useHistoricalAll } from 'api/covid-historical';
import { AllChart } from './AllChart';

function AllChartContainer() {
  const [days] = useAtom(daysAtom);
  const { status, data, error } = useHistoricalAll(days);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return null;
  }

  return <AllChart data={data} />;
}

export { AllChartContainer };
