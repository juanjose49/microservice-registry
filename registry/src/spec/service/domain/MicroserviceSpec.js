const Microservice = require('../../../service/domain/Microservice')

describe("Microservice Spec:", function(){
    it("Constructor should successfully initialize with valid arguments.", function(){
        let microservice = new Microservice("mock-micro", ["mock", "fun"], "https://github.com/my-repo", "12345");
        expect(microservice.name).toEqual("mock-micro");
        expect(microservice.keywords).toEqual(["mock", "fun"]);
        expect(microservice.url).toEqual("https://github.com/my-repo");
        expect(microservice.composeId).toEqual("12345");
    })
})