/**
 * This class holds the meta information required for a microservice to be
 * listed on the registry.
 * 
 * @param {String} name the name of the Microservice.
 * @param {String[]} keywords the keywords that will become searchable.
 * @param {String} url the URL where the source code is located.
 * @param {String} composeId the compose file's uuid.
 */
function Microservice(name, keywords, url, composeId){
    this.name = name;
    this.keywords = keywords;
    this.url = url;
    this.composeId = composeId;
}

module.exports = Microservice;