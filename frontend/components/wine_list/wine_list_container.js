import WineList from './wine_list';
import {connect} from 'react-redux';
import { fetchWines } from '../../actions/wine_actions';
import { startLoading, stopLoading } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
    return {
        wines: state.wines,
        loading: state.ui.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWines: () => dispatch(fetchWines()),
        startLoading: () => dispatch(startLoading()),
        stopLoading: () => dispatch(stopLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineList);