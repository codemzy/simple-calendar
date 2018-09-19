import Month from './month';

export default ({ year }) => {
  return Array.apply(0, Array(12)).map(function(item, i) {
    let monthNum = i + 1 < 10 ? "0" + (i + 1) : i + 1; // add leading zero
    return <Month key={i + 1} month={monthNum} year={year} />;
  });
};