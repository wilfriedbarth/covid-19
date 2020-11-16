import React from 'react';
/* import { useAtom } from 'jotai'; */
/* import { daysAtom } from './viewState'; */
import { useDaysStore } from './viewState';

function SelectNumberDays() {
  /* const [days, setDays] = useAtom(daysAtom); */
  const days: any = useDaysStore((state) => state.days);
  const setDays: any = useDaysStore((state) => state.setDays);

  return (
    <input
      type="number"
      onChange={(e) => setDays(Number(e.target.value))}
      value={days}
    />
  );
}

export { SelectNumberDays };
