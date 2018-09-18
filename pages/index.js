// components
import Layout from '../components/layout';
import Month from '../components/year/month';

let currentYear = "2018";

export default () => (
  <Layout title={currentYear}>
    <div className="container">
      <h1 className="display-1 font-weight-bold">{currentYear}</h1>
      <hr />
      <div className="row">
        <Month month="01" year={currentYear} />
      </div>
    </div>
  </Layout>
);