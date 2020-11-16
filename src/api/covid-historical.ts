import { useQuery } from 'react-query';

const BASE_URL = 'https://disease.sh/v3/covid-19';

interface HistoricalAllDataPoints {
  [date: string]: number;
}

interface HistoricalAll {
  cases: HistoricalAllDataPoints;
  deaths: HistoricalAllDataPoints;
  recovered: HistoricalAllDataPoints;
}

async function fetchHistoricalAll(
  key: string,
  { lastDays = 30 }: { lastDays: number },
): Promise<HistoricalAll> {
  const res = await fetch(`${BASE_URL}/${key}?lastdays=${lastDays}`);
  const json = await res.json();
  return json;
}

function useHistoricalAll(lastDays: number) {
  return useQuery<HistoricalAll, Error>(
    ['historical/all', { lastDays }],
    fetchHistoricalAll,
  );
}

export type { HistoricalAll };
export { useHistoricalAll };
