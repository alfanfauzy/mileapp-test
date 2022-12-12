import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { useState } from 'react';
import dataMarker from '../../../data/dataMarker.json';

function Maps(props) {
	const { google } = props;

	const [selectedMarker, setSelectedMarker] = useState(null);
	const [visibleInfo, setVisibleInfo] = useState(false);

	const handleRenderMarker = () => {
		return dataMarker.markerpoints.map((marker) => (
			<Marker
				onClick={() => {
					setSelectedMarker(marker);
					setVisibleInfo(true);
				}}
				key={marker.id}
				position={{
					lat: parseFloat(marker.coordinates[0]),
					lng: parseFloat(marker.coordinates[1]),
				}}
				icon={{
					url: require('../../../assets/images/iconMarker.png'),
					scaledSize: new window.google.maps.Size(30, 30),
				}}
			/>
		));
	};

	return (
		<>
			<Map
				google={google}
				zoom={16}
				initialCenter={{
					lat: -6.1760529,
					lng: 106.7903084,
				}}
				style={{ margin: '0 auto', height: '80%', width: '90%' }}
			>
				{handleRenderMarker()}

				<InfoWindow
					visible={visibleInfo}
					position={{
						lat: parseFloat(selectedMarker?.coordinates[0]),
						lng: parseFloat(selectedMarker?.coordinates[1]),
					}}
				>
					<div>
						<h3>{selectedMarker?.name}</h3>
						<p>{selectedMarker?.detail}</p>
					</div>
				</InfoWindow>
			</Map>
		</>
	);
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(Maps);
