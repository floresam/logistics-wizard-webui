import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';

const mapActionCreators = {
};

const mapStateToProps = (state) => ({
  demoName: state.demoSession.name || 'loading...',
  dbdata: state.dashboard,
});

export default connect(mapStateToProps, mapActionCreators)(Dashboard);
