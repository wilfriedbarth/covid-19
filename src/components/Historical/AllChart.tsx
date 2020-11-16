import React from 'react';
import { HistoricalAll } from 'api/covid-historical';
import { Chart } from 'react-charts';

function AllChart({ data }: { data: HistoricalAll }) {
  const { cases, deaths, recovered } = data;

  const casesData = Object.entries(cases).map(([k, v]) => ({
    primary: new Date(k),
    secondary: v,
  }));
  const deathData = Object.entries(deaths).map(([k, v]) => ({
    primary: new Date(k),
    secondary: v,
  }));
  const recoveredData = Object.entries(recovered).map(([k, v]) => ({
    primary: new Date(k),
    secondary: v,
  }));

  const chartData = React.useMemo(
    () => [
      { label: 'Cases', data: casesData },
      { label: 'Deaths', data: deathData },
      { label: 'Recovered', data: recoveredData },
    ],
    [casesData, deathData, recoveredData],
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'right' },
    ],
    [],
  );

  return (
    <div style={{ width: '1000px', height: '500px' }}>
      <Chart data={chartData} axes={axes} />
    </div>
  );
}

export { AllChart };
