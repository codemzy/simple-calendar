import moment from 'moment';

export default ({ month, year }) => {
  
  let monthName = moment(month, "MM").format("MMM");
  let daysInMonth = moment(year + "-" + month, "YYYY-MM").daysInMonth();
  
  return (
    <div class="col-md-3">
      <h2>{ monthName }</h2>
      <p>{ daysInMonth }</p>

    </div>
  );
};