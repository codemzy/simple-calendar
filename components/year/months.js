// hoc
import HOC_Today from '../hoc/today';
// components
import Month from './month';

export default HOC_Today(({ year, currentDay, currentMonth }) => {
  return Array.apply(0, Array(12)).map(function(item, i) {
    let monthNum = i + 1 < 10 ? "0" + (i + 1) : i + 1; // add leading zero
    return <Month key={i + 1} month={monthNum} year={year} currentDay={currentDay} currentMonth={currentMonth} />;
  });
});