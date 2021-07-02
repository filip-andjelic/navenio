import ApiService from "../services/api.service";

const apiCall = (parameter: string, callback: any) => {
    ApiService.getCharacters(parameter).then((result) => {
        callback(result);
    });
};

test('Character response from API has valid structure and data returned', done => {
    function callback(data: any) {
        try {
            // Check that response is truthy value
            expect(data).toBeTruthy();
            // Check that only one response returned for Luke Skywalker
            expect(Number(data.count)).toBe(1);
            // Check that first result contains data
            expect(data.results[0]).toBeTruthy();
            // Check that first item in results matches Luke's data
            expect(data.results[0]).toEqual({"birth_year": "19BBY", "created": "2014-12-09T13:50:51.644000Z", "edited": "2014-12-20T21:17:56.891000Z", "eye_color": "blue", "films": ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/", "https://swapi.dev/api/films/6/"], "gender": "male", "hair_color": "blond", "height": "172", "homeworld": "https://swapi.dev/api/planets/1/", "mass": "77", "name": "Luke Skywalker", "skin_color": "fair", "species": [], "starships": ["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"], "url": "https://swapi.dev/api/people/1/", "vehicles": ["https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/"]});

            done();
        } catch (error) {
            done(error);
        }
    }

    apiCall('Luke Skywalker', callback);
});
