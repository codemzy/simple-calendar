// components
import Layout from '../components/layout';
import Month from '../components/year/month';

let currentYear = "2018";

let Months = ({ year }) => {
  return Array.apply(0, Array(12)).map(function(item, i) {
    return <Month key={i + 1} month={i + 1} year={year} />;
  });
};

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