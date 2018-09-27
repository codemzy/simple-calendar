// hoc
import HOC_Year from '../components/hoc/year';

// components
import Year from '../components/year/year';
import Layout from '../components/layout';
import Months from '../components/year/months';


// component wrapped in year hoc
export default HOC_Year(({ year, currentYear, handleChange }) => {
  return (
    <Layout title={`${year}`}>
        <Year year={year} currentYear={currentYear} handleChange={handleChange} />
        <div className="row">
          <Months year={year} />
        </div>
    </Layout>
  );
});