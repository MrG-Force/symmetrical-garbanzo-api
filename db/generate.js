const { get } = require("lodash");

module.exports = function () {
    const { faker } = require("@faker-js/faker");
    const _ = require("lodash");

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    };

    function getDeathDate(birthdate) {
        let birthYear = birthdate.getFullYear();
        let minYear = birthYear + 22;
        let maxYear = birthYear + 99;
        let currentYear = new Date().getFullYear();
        let deathDate = faker.date.birthdate({ min: minYear, max: maxYear, mode: 'year' });
        if (deathDate.getFullYear() >= currentYear) {
            return faker.date.recent(getRndInteger(10, 1000));
        }
        return deathDate;
    }
    return {
        art: _.times(30, (n) => {
            const birthdate = faker.date.birthdate({ min: 1900, max: 1980, mode: 'year' });
            const deathDate = getDeathDate(birthdate);
            return {
                Category: "Poster",
                Size: `${faker.finance.amount(60, 300, 2)} cm x ${faker.finance.amount(50, 150, 2)} cm`,
                Price: faker.datatype.float({min: 40, max: 300}),
                Title: faker.lorem.sentence(3),
                ArtDescription: faker.lorem.sentences(),
                ArtDating: faker.finance.amount(1900, 1999, 0),
                ArtId: `${faker.random.alpha({ count: 2, casing: 'upper' })}-${faker.random.alpha({ count: 1, casing: 'upper' })}-${faker.random.numeric(4)}`,
                Artist: faker.name.findName(),
                ArtistBirthDate: birthdate,
                ArtistDeathDate: deathDate,
                ArtistNationality: "Mexico",
                id: n + 1,
             }
        })
    }
}