import moment from 'moment';

// components
import Day from './day';

export default ({ month, year, currentDay, currentMonth }) => {
  
  let monthName = moment(month, "MM").format("MMM");
  let activeMonth = moment(year + "-" + month).format("YYYY-MM") === currentMonth;
  let daysInMonth = moment(year + "-" + month, "YYYY-MM").daysInMonth();
  let startDay = moment(year + "-" + month + "-01").format("d"); 
  
  // blanks at the start to signify day of week
  let blanks = Array.apply(0, Array(parseInt(startDay))).map(function(item, i) {
    return <Day key={"blank-" + i} blank="true" />;
  });
  
  // days in month
  let days = Array.apply(0, Array(daysInMonth)).map(function(item, i) {
    let dayName = moment(year + "-" + month + "-" + (i + 1 < 10 ? "0" + (i + 1) : i + 1)).format('dddd'); 
    let today = moment(year + "-" + month + "-" + (i + 1 < 10 ? "0" + (i + 1) : i + 1)).format('YYYY-MM-DD') === currentDay; 
    return <Day key={i} day={i + 1} dayName={dayName} month={monthName} year={year} today={today} />;
  });
  
  return (
    <div className="col-10 col-sm-6 col-md-4 col-lg-3 pt-5">
      <h2 className={ activeMonth ? "text-primary" : "" }>{ monthName }</h2>
      <div className="days">{ blanks }{ days }</div>
    </div>
  );
};