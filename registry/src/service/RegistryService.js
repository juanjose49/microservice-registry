const Microservice = require('./domain/Microservice');

/**
 * Returns an array of Microservices that match the search query.
 * 
 * @param {String} searchValue the search query, which should be space delimited alpha strings.
 * @return {Microservice[]} an array of all the Microservices that match the search query.
 */
function search(searchValue){
    let splitSearchValues = searchValue.split(" ");
    let microservices = this.getAllMicroservices();
    let hits = [];
    for(let i=0; i<splitSearchValues.length; i++){
        let currentSearchValue = splitSearchValues[i];
        for(let j=0; j<microservices.length; j++){
            if(microservices[j].keywords.indexOf(currentSearchValue) !== -1  
                && hits.indexOf(microservices[j]) === -1){
                hits.push(microservices[j]);
            }
        }
    }
    return hits;
}

/**
 * Returns an array of all the Microservices that are listed on the registry.
 * @return {Microservice[]} an array of all the Microservices that are listed on the registry.
 */
function getAllMicroservices(){
    return [
        new Microservice("SimpleStorageService", ["simple","cat"], "https://github.com/my-repo", "abc"),
        new Microservice("SimpleStorageService", ["test"], "https://github.com/my-repo", "abc"),
        new Microservice("SimpleStorageService", ["cat", "simple"], "https://github.com/my-repo", "abc"),
        new Microservice("SimpleStorageService", ["eagle"], "https://github.com/my-repo", "abc"),
        new Microservice("SimpleStorageService", ["mow"], "https://github.com/my-repo", "abc")
    ]
}

module.exports = {
    search:search,
    getAllMicroservices:getAllMicroservices
}