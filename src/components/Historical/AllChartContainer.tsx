import React from 'react';
/* import { useAtom } from 'jotai'; */
import { useHistoricalAll } from 'api/covid-historical';
import { AllChart } from './AllChart';
/* import { daysAtom } from './viewState'; */
import { useDaysStore } from './viewState';

function AllChartContainer() {
  const days: any = useDaysStore((state) => state.days);
  const { status, data, error } = useHistoricalAll(days);

  return (
    <>
      {(() => {
        if (status === 'loading') {
          return <div>Loading...</div>;
        } else if (status === 'error') {
          return <div>Error: {error}</div>;
        } else if (!data) {
          return null;
        } else {
          return <AllChart data={data} />;
        }
      })()}
    </>
  );
}

export { AllChartContainer };
