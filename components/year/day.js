
export default ({ day, month, blank }) => {
  return (
    <div className={"d-inline-block year-day" + (blank ? " blank" : "") }>
    </div>
  );
};