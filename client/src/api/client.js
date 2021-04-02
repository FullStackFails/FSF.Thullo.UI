const parser = require("uri-template");
const axios = require("axios");

export async function get(url, parameters, config) {
  var template = parser.parse(url);
  var expandedUrl = template.expand(parameters);

  return axios.get(expandedUrl, config);
}

export async function post(url, parameters, data, config) {
  var template = parser.parse(url);
  var expandedUrl = template.expand(parameters);

  return axios.post(expandedUrl, data, config);
}
