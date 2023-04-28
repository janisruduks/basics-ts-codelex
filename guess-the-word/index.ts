const prompts = require('prompts');

(async () => {
    const words: string[] = [
        'codelex',
        'coding',
        'asymmetric',
        'java',
        'youreallycantguessthis'
    ]

    const word: string = words[(Math.random() * words.length) | 0]
    const wordParts: string[] = word.split('');

    let targetWord: string[] = '_'.repeat(word.length).split('');

    let guesses: number = 0;
    const maxGuesses: number = word.length + 3;

    console.log(targetWord.join(' '));

    while (guesses < maxGuesses){
        const response = await prompts({
            type: 'text',
            name: 'letter',
            message: 'Enter letter:',
        });
        
        let letterPostion = wordParts.indexOf(response.letter);

        if(letterPostion > -1){
            console.log("✅You guessed it!");
            targetWord[letterPostion] = response.letter;
            wordParts[letterPostion] = '-';

            if(word === targetWord.join('')){
                console.log('✅You have won!✅ correct word was: ' + word)
                break;
            }

        }else {
            console.log('❌Guessed wrong')
            guesses++;
        }
        console.log(targetWord.join(' '));
    }

    if(word !== targetWord.join('')){
        console.log('You lose... sad to be honest, word was: ' + word);
    }
})();