import Month from './month';

export default ({ year }) => {
  return Array.apply(0, Array(12)).map(function(item, i) {
    return <Month key={i + 1} month={i + 1} year={year} />;
  });
};