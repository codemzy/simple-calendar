// components
import Layout from '../components/layout';
import Months from '../components/year/months';

let currentYear = "2018";

export default () => (
  <Layout title={currentYear}>
    <div className="container">
      <h1 className="display-1 font-weight-bold">{currentYear}</h1>
      <hr />
      <div className="row">
        <Months year={currentYear} />
      </div>
    </div>
  </Layout>
);