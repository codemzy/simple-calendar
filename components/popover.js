export default ({ children, coords }) => (
  <div className="popover fade show bs-popover-top" role="tooltip" x-placement="top" style={{top: "0px", left: "0px", transform: `translate3d(${coords.left}px, ${coords.top}px, 0px)`}}>
    <div className="arrow" style={{left: "22px"}}></div>
    <div className="popover-body">{ children }</div>
  </div>
);