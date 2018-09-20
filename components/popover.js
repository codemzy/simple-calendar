export default ({ children }) => (
  <div className="popover fade show bs-popover-top" role="tooltip" x-placement="top">
    <div className="arrow" style={{left: "75px"}}></div>
    <div className="popover-body">{ children }</div>
  </div>
);