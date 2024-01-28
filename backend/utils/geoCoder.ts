import NodeGeocoder from "node-geocoder";
import fetch from "cross-fetch";

const options = {
  provider: process.env.GEOCODER_PROVIDER,

  fetch: fetch,
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
};

const geoCoder = NodeGeocoder(options);

export default geoCoder;
