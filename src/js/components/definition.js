export default function BirthSelect() {
  const years = [{ value: '-', label: '-' }];
  for (let i = 1990; i < 2021; i++) {
    const value = '';
    const label = '';
    years.push({
      value: i,
      label: i,
    });
  }

  const months = [{ value: '-', label: '-' }];
  for (let i = 1; i < 13; i++) {
    const value = '';
    const label = '';
    months.push({
      value: i,
      label: i,
    });
  }
  const days = [{ value: '-', label: '-' }];
  for (let i = 1; i < 32; i++) {
    const value = '';
    const label = '';
    days.push({
      value: i,
      label: i,
    });
  }

  const birthSelect = {
    years: years,
    months: months,
    days: days,
  };

  return birthSelect;
}
