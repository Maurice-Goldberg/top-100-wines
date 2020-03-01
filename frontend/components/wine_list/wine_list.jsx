import React from 'react';
import { Throttle, Debounce } from 'react-throttle';
import LoadingScreen from '../loading_screen';

class WineList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredWineId: null
        }
    }

    componentDidMount() {
    }

    render() {
        if(Object.values(this.props.wines).length === 0) {
            if(this.props.loading) {
                this.props.fetchWines().then(this.props.stopLoading);
            } else {
                this.props.startLoading();
            }
            return (
                <LoadingScreen />
            );
        }

        let wineList = Object.values(this.props.wines).map((wineObj) => {
            return (
                <div key={wineObj.wineId} className="wine-item">
                        <Debounce time="100" handler="onMouseOver">
                            <li key={wineObj.wineId} onMouseOver={() => this.setState({ hoveredWineId: wineObj.wineId })} onMouseLeave={() => this.setState({ hoveredWineId: null })}>
                                <p className="wine-name">{wineObj.wine_full}</p>
                                <p className="winery-name">{wineObj.winery_full}</p>
                                <p className="vintage">{wineObj.vintage}</p>
                            </li>
                        </Debounce>
                    {this.state.hoveredWineId === wineObj.wineId && 
                        <p className="tasting-note">
                            {this.props.wines[wineObj.wineId].note}
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