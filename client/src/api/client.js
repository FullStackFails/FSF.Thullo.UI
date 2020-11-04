const parser = require('uri-template');
const axios = require('axios');

export function get(url, parameters, config) {
  var template = parser.parse(url);
  var expandedUrl = template.expand(parameters);

  return axios.get(expandedUrl, config);
}