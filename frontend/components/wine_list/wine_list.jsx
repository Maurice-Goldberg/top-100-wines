import React from 'react';
import { Throttle, Debounce } from 'react-throttle';

class WineList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredWineId: null
        }

        this.displayNote = this.displayNote.bind(this);
    }

    componentDidMount() {
        this.props.fetchWines();
    }

    displayNote(wineId) {
        this.props.fetchTastingNote(parseInt(wineId)).then(() => {
            this.setState({ hoveredWineId: wineId });
        });
    }

    render() {
        if(Object.values(this.props.wines).length === 0) {
            return null;
        }

        let wineList = Object.values(this.props.wines).map((wineObj) => {
            return (
                <div key={wineObj.id} className="wine-item">
                        <Debounce time="100" handler="onMouseOver">
                            <li onMouseOver={() => this.displayNote(wineObj.id)} onMouseLeave={() => this.setState({ hoveredWineId: null })}>
                                <p>{wineObj.wine_full}</p>
                                <p>{wineObj.winery_full}</p>
                                <p>{wineObj.vintage}</p>
                            </li>
                        </Debounce>
                    {this.state.hoveredWineId === wineObj.id && 
                        <p className="tasting-note">
                            {this.props.tastingNotes[wineObj.id]}
                        </p>
                    }
                </div>
            );
        });

        return (
            <div className="wine-list-container">
                {wineList}
            </div>
        )
    }
}

export default WineList;