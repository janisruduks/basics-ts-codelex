const prompts = require('prompts');

type GameElement = {
    title: string;
    beats: GameElement[];
}

const ELEMENT_LIZARD: GameElement = {
    title: '🦎',
    beats: [],
};
const ELEMENT_PAPER: GameElement = {
    title: '📄',
    beats: [],
};
const ELEMENT_SCISSORS: GameElement = {
    title: '✂️',
    beats: [],
};
const ELEMENT_ROCK: GameElement = {
    title: '🪨',
    beats: [],
};
const ELEMENT_SPOCK: GameElement = {
    title: '🖖',
    beats: [],
};

ELEMENT_LIZARD.beats.push(ELEMENT_PAPER, ELEMENT_SPOCK);

ELEMENT_SPOCK.beats.push(ELEMENT_ROCK, ELEMENT_SCISSORS);

ELEMENT_ROCK.beats.push(ELEMENT_SCISSORS, ELEMENT_LIZARD);

ELEMENT_PAPER.beats.push(ELEMENT_ROCK, ELEMENT_SPOCK);

ELEMENT_SCISSORS.beats.push(ELEMENT_PAPER, ELEMENT_LIZARD);

const ELEMENTS: GameElement[] = [
    ELEMENT_PAPER,
    ELEMENT_ROCK,
    ELEMENT_SCISSORS,
    ELEMENT_LIZARD,
    ELEMENT_SPOCK
];

(async () => {
    const PC_SELECTION: GameElement = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];

    const response = await prompts({
        type: 'select',
        name: 'selectedElement',
        message: 'Select your element',
        choices: ELEMENTS
    });

    const PLAYER_SELECTION = ELEMENTS[response.selectedElement];

    if(PC_SELECTION.title === PLAYER_SELECTION.title){
        console.log("It's a draw 🤝");
    }else {
        if(PLAYER_SELECTION.beats.includes(PC_SELECTION)){
            console.log("🤖 chose: " + PC_SELECTION.title);
            console.log("🧔 winner 🥳");
            console.log("Because " + PLAYER_SELECTION.title + "  beat " + PLAYER_SELECTION.beats[0].title + "  and " + PLAYER_SELECTION.beats[1].title);
        }else {
            console.log("🤖 won");
            console.log("Because " + PC_SELECTION.title + "  beat " + PC_SELECTION.beats[0].title + "  and "+ PC_SELECTION.beats[1].title);
        }
    }
})();