// components
import Layout from '../components/layout';

let currentYear = "2018";

export default () => (
  <Layout title={currentYear}>
    <div className="container">
      <h1 className="display-1 font-weight-bold">{currentYear}</h1>
      <p>Welcome to simple-calendar!</p>
    </div>
  </Layout>
);