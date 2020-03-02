import React from 'react';
// import { Throttle, Debounce } from 'react-throttle';
import LoadingScreen from '../loading_screen';

class WineList extends React.Component {
    constructor(props) {
        super(props);
        this.sortWines = this.sortWines.bind(this);
        this.filterWines = this.filterWines.bind(this);

        this.state = {
            hoveredWineId: null,
            sortCriteria: "top100_rank",
            color: "",
            country: "",
        }
    }

    sortWines(wineArr, sortCriteria) {
        return wineArr.sort(
            (prevWineObj, nextWineObj) => {
                if(sortCriteria === "price: high to low") {
                    return nextWineObj["price"] - prevWineObj["price"];
                } else if (sortCriteria === "vintage: newest to oldest") {
                    return parseInt(nextWineObj["vintage"]) - parseInt(prevWineObj["vintage"]);
                } else if (sortCriteria === "vintage: oldest to newest") {
                    return parseInt(prevWineObj["vintage"]) - parseInt(nextWineObj["vintage"]);
                } else {
                    return prevWineObj[sortCriteria] - nextWineObj[sortCriteria];
                }
            }
        );
    }

    filterWines(wineArr, filterCategory, filterValue) {
        return wineArr.filter(
            (wineObj) => {
                if(wineObj[filterCategory] === filterValue) {
                    return true;
                } else {
                    return false;
                }
        })
    }

    render() {
        if(Object.values(this.props.wines).length === 0) {
            if(this.props.loading) {
                setTimeout(() => {
                    this.props.fetchWines().then(this.props.stopLoading);
                }, 2000);
            } else {
                this.props.startLoading();
            }
            return (
                <LoadingScreen />
            );
        }

        let wineList = this.sortWines(Object.values(this.props.wines), this.state.sortCriteria);
        if(this.state.color) {
            wineList = this.filterWines(wineList, "color", this.state.color);
        }
        if(this.state.country) {
            wineList = this.filterWines(wineList, "country", this.state.country);
        }

        wineList = wineList.map((wineObj) => {
            let className = `${wineObj.color}-wine`;
            return (
                <div key={wineObj.wineId} className="wine-item">
                        {/* Debouncing no longer necessary now that all wine info, including notes, is fetched at once */}
                        {/* <Debounce time="100" handler="onMouseOver"> */}
                            <li className={className} key={wineObj.wineId}
                                onMouseOver={() => this.setState({ hoveredWineId: wineObj.wineId })}
                            >
                                <p className="wine-rank">{wineObj.top100_rank}</p>
                                <div className="wine-details">
                                    <p className="wine-name">{wineObj.wine_full}</p>
                                    <p className="winery-name-and-country">{wineObj.winery_full} ({wineObj.country})</p>
                                    <p className="vintage-and-color">
                                        {wineObj.vintage}, {wineObj.color.slice(0, 1).toUpperCase() + wineObj.color.slice(1)}
                                    </p>
                                </div>
                                <p className="price">${wineObj.price}</p>
                                {
                                    wineObj.color === "sparkling" &&
                                    <div id="bubbles">
                                        <div className="bubble x1"></div>
                                        <div className="bubble x2"></div>
                                        <div className="bubble x3"></div>
                                        <div className="bubble x4"></div>
                                        <div className="bubble x5"></div>
                                    </div>
                                }
                            </li>
                        {/* </Debounce> */}
                </div>
            );
        });

        let wineColor = this.state.hoveredWineId ? `${this.props.wines[this.state.hoveredWineId].color}-wine` : "";

        return (
            <div className="content">
                <h1>Wine Spectator's Top 100</h1>
                <div className="wine-info">
                        <div className="wine-list">
                            <div className="sorting-and-filtering">
                                <div className="sorting">
                                    <label htmlFor="">Sort by:</label>
                                    <select className="sort-dropdown" onChange={(e) => this.setState({sortCriteria: e.currentTarget.value})} value={this.state.sortCriteria}>
                                        <option value="top100_rank">Rank</option>
                                        <option value="vintage: oldest to newest">Vintage: oldest to newest</option>
                                        <option value="vintage: newest to oldest">Vintage: newest to oldest</option>
                                        <option value="price">Price: low to high</option>
                                        <option value="price: high to low">Price: high to low</option>
                                    </select>
                                </div>
                                <div className="filtering">
                                    <label htmlFor="">Filter by:</label>
                                    <select className="color-dropdown" onChange={(e) => this.setState({ color: e.currentTarget.value })} value={this.state.color}>
                                        <option value="">Color/Type</option>
                                        <option value="red">Red</option>
                                        <option value="white">White</option>
                                        <option value="sparkling">Sparkling</option>
                                        <option value="dessert">Dessert</option>
                                    </select>
                                    <select className="country-dropdown" onChange={(e) => this.setState({ country: e.currentTarget.value })} value={this.state.country}>
                                        <option value="">Country/State</option>
                                        <option value="France">France</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Oregon">Oregon</option>
                                        <option value="California">California</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Washington">Washington</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Italy">Italy</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Chile">Chile</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Israel">Israel</option>
                                    </select>
                                </div>
                            </div>
                            <div className="wine-items-container">
                                {wineList.length === 0 ? 
                                    <p className="no-results">No results.</p>
                                    :
                                    wineList
                                }
                            </div>
                        </div>
                    <div id={wineColor} className="tasting-note-container">
                        <h2>Tasting Note</h2>
                        { this.state.hoveredWineId &&
                            <>
                                <div className="tasting-note-content-wrapper">
                                    <div className="tasting-note-content">
                                        <p className="tasting-note">
                                            "{this.props.wines[this.state.hoveredWineId].note}"
                                        </p>
                                        <br></br>
                                        <p className="taster-initials">
                                            - {this.props.wines[this.state.hoveredWineId].taster_initials}
                                        </p>
                                    </div>
                                </div>
                            </>
                        }

                        {
                            this.state.hoveredWineId &&
                            this.props.wines[this.state.hoveredWineId].color === "sparkling" &&
                            <div id="bubbles" className="note-bubbles">
                                <div className="bubble x1"></div>
                                <div className="bubble x2"></div>
                                <div className="bubble x3"></div>
                                <div className="bubble x4"></div>
                                <div className="bubble x5"></div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            
        )
    }
}

export default WineList;