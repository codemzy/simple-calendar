import moment from 'moment';

// components
import Day from './day';

export default ({ month, year }) => {
  
  let monthName = moment(month, "MM").format("MMM");
  let daysInMonth = moment(year + "-" + month, "YYYY-MM").daysInMonth();
  
  let days = Array.apply(0, Array(daysInMonth)).map(function(item, i) {
    return <Day key={i} day={i + 1} month={monthName} />;
  });
  
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <h2>{ monthName }</h2>
      <div className="days">{ days }</div>
    </div>
  );
};