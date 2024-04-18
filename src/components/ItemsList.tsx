//userOfList

import Col from "react-bootstrap/Col";

import ExamplePopover from "@/components/ExamplePopover";
import ExampleOffcanvas from "./ExampleOffcanvas";

const ItemsList: React.FC = () => {
  return (
    <>
      <Col lg={8} classNameName="px-0">
      <ul className="list-group">
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
    <label className="form-check-label" htmlFor="firstCheckbox">First checkbox</label>
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
    <label className="form-check-label" htmlFor="secondCheckbox">Second checkbox</label>
  </li>
  <li className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
    <label className="form-check-label" htmlFor="thirdCheckbox">Third checkbox</label>
  </li>
</ul>
      </Col>
    </>
  );
};

export default ItemsList;