import WineList from './wine_list';
import {connect} from 'react-redux';
import { fetchWines } from '../../actions/wine_actions';
import { fetchTastingNote } from '../../actions/tasting_note_actions';

const mapStateToProps = (state) => {
    return {
        wines: state.wines,
        tastingNotes: state.tastingNotes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWines: () => dispatch(fetchWines()),
        fetchTastingNote: (wineId) => dispatch(fetchTastingNote(wineId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineList);