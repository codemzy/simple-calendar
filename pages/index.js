// hoc
import Year from '../components/hoc/year';

// components
import Layout from '../components/layout';
import Months from '../components/year/months';


// component wrapped in year hoc
export default Year(({ year }) => {
  return (
    <Layout title={`${year}`}>
      <div className="container pt-3">
        <h1 className="display-1 font-weight-bold">{year}</h1>
        <hr />
        <div className="row">
          <Months year={year} />
        </div>
      </div>
    </Layout>
  );
});