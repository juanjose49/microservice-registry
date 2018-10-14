const registryService = require('../../service/RegistryService');
const Microservice = require('../../service/domain/Microservice');

describe("RegistryService Spec:", function(){
    it("'search' should return a list of Microservices that match with the search query.", function(){
        spyOn(registryService, "getAllMicroservices").and.returnValue(getAllMockMicroservices())
        let results = registryService.search("cat");
        expect(results.length).toEqual(2);
        expect(results[0].name).toEqual("mock-service-1");
        expect(results[1].name).toEqual("mock-service-3");
    })
})

/**
 * Returns an array of mock Microservices that can be used for testing.
 */
function getAllMockMicroservices(){
    return [
        new Microservice("mock-service-1", ["simple","cat"], "https://github.com/my-repo", "abc"),
        new Microservice("mock-service-2", ["test"], "https://github.com/my-repo", "abc"),
        new Microservice("mock-service-3", ["cat", "simple"], "https://github.com/my-repo", "abc"),
        new Microservice("mock-service-4", ["eagle"], "https://github.com/my-repo", "abc"),
        new Microservice("mock-service-5", ["mow"], "https://github.com/my-repo", "abc")
    ]
}