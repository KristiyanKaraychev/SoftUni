function makeADictionary(input) {
    let dictionary = [];

    for (let entry of input) {
        let parsedObj = JSON.parse(entry);

        let entryFound = dictionary.find(
            (m) => Object.keys(m)[0] === Object.keys(parsedObj)[0]
        );

        if (entryFound) {
            entryFound[Object.keys(entryFound)[0]] =
                Object.values(parsedObj)[0];
        } else {
            dictionary.push(parsedObj);
        }
    }

    dictionary.sort((a, b) =>
        Object.keys(a)[0].localeCompare(Object.keys(b)[0])
    );

    for (let entry of dictionary) {
        console.log(
            `Term: ${Object.keys(entry)} => Definition: ${Object.values(entry)}`
        );
    }
}

makeADictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Art":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"aaaaaa nation, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',
]);
