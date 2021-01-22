// Data service file is used to communicate with an Api
let flashCardDecks = [{
    deckLang: 'cssDeck',
    cardVocab: [],
    cardDescription: [],
    url: '1wD7HWF3ELELPRP5QvfOAXdl3EkaJMP8KFrGsmItwwMg'
},
{
    deckLang: 'jsDeck',
    cardVocab: [],
    cardDescription: [],
    url: '17ll_3oJOJoiq9QbuYHqVCPEz-JB9OiuRk08Eqlj_kcY'
},
{
    deckLang: 'htmlDeck',
    cardVocab: [],
    cardDescription: [],
    url: '1TqYavKC7scvsT-sLM5cBb58kbU0pk-vilpFf6p55JQk'
},
{
    deckLang: 'cSharpDeck',
    cardVocab: [],
    cardDescription: [],
    url: '13BHhB9NgnfmjhFtHHLxO7qr0glFG8Z5RuaC4LPHY3W8'
}
]

let finalObject;

function objectifyer(test){
    let tempObj = {
    cssDeck: {

    }, 
    jsDeck : {

    }, 
    htmlDeck: {

    },
    cSharpDeck:{

    }};
    test.forEach(element => {
        tempObj[element.deckLang] = element;
    });
    return tempObj;
}

async function FetchJSON(test) {
    return fetch(test).then(
        resp => resp.json()
    ).catch(
        error => console.log(error)
    );
}

async function setFlashCardDecks() {
    let tempArr = [];
    for(let y = 0; y < flashCardDecks.length; y++) {
        tempArr[y] = await FetchJSON(`https://spreadsheets.google.com/feeds/list/${flashCardDecks[y].url}/1/public/full?alt=json`).then(data => data = data.feed.entry);
        for (let i = 0; i < tempArr[y].length; i++) {
            flashCardDecks[y].cardVocab.push(tempArr[y][i].gsx$name.$t);
            flashCardDecks[y].cardDescription.push(tempArr[y][i].gsx$desctription.$t);
        }
    }
    return objectifyer(flashCardDecks);

};
setFlashCardDecks()


export { setFlashCardDecks, FetchJSON, finalObject };