export default ({ year, currentYear }) => {
  return <h1 className={"display-1 font-weight-bold" + (year === currentYear ? " text-primary" : "")}>{year}</h1>;
};