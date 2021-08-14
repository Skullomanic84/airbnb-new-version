import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import getCenter  from 'geolib/es/getCenter';

function Map({ searchResults }) {

    const [selectedLocation, setSelectedLocation]=useState();

        //transform search results object inot the 
        //{ latitude: 52.52758, longititude: -123.68704 } object

        const coordinates = searchResults.map((results) =>({
            longitude:results.long,
            latitude:results.lat,
        }));

        //The latitude and longitude of the center of locations coordinates

        const center = getCenter(coordinates);

        const [ viewport, setViewport ] =
        useState({
            width: '100%',
            height: '100%',
            latitude: center.latitude,
            longitude: center.longitude,
            zoom: 11,
        });

    return (
        <ReactMapGL
        mapStyle='mapbox://styles/skullomanic/cksbbechs5t9j17p4gfks2bhx'
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
        {searchResults.map(results => (
            <div key={results.long}>
                <Marker
                longitude={results.long}
                latitude={results.lat}
                offsetLeft={-20}
                offsetTop={-10}>
                 <p
                 role='img' 
                 onClick={()=> setSelectedLocation(result)}
                 className='cursor-pointer text-2xl animate-bounce'
                 aria-label='pushpin'>
                 📌 
                 </p>
                </Marker>
                {/*Pop-up */}
            </div>
        ))}
            
        </ReactMapGL>
    )
}

export default Map
