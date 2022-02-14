import axios from "axios";
import { parseMovieAdsData } from '../movies/movies.service';
import { getUserNATSCode } from "../nats-service/nats.service";

const urls = {
	ads: "/frontend/ads_config",
};

const propertyId = process.env.REACT_APP_PROPERTY_ID;

const fetchMovieAds = async (adsConfigurations, index = 0) => {
	const configurationKeys = Object.keys(adsConfigurations);
	let response;

	if (index === configurationKeys.length) {
		return false;
	}
	if (!!adsConfigurations[configurationKeys[index]]) {
		response = await axios.get(`${urls.ads}`, {
			params: {
				[configurationKeys[index]]:
					adsConfigurations[configurationKeys[index]],
			},
		});
	}

	const ads = response?.data?.data?.ads_config;
	if (!!ads?.properties?.[0]?.movieAds?.length &&
			ads?.properties?.[0]?.propertyId === parseInt(propertyId)
	) {
		return parseMovieAdsData(response);
	}

	if (
		!!ads?.length ||
		(!!ads?.properties?.[0]?.movieAds?.length &&
			ads?.properties?.[0]?.propertyId === parseInt(propertyId))
	) {
		// If ads are found, return the ads
		return ads?.properties?.[0]?.movieAds || ads;
	}
	// Run the second configuration of ads
	else {
		return fetchMovieAds(adsConfigurations, index + 1);
	}
};

export const getVideoAds = async (movieId = undefined) => {
	// Priority is the following:
	// NatsAds, MovieAds, PropertyAds
	const nats = getUserNATSCode();
	return fetchMovieAds({
		nats_code: nats,
		movies_id: movieId,
		properties_id: propertyId,
	});
};
