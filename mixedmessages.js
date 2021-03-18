const messages = {
    firstWord: ['bad', 'terrible', 'okay', 'good', 'amazing', 'unbelievable'],
    secondWord: ['fruits', 'vegetables', 'sweets', 'desserts', 'sushi'],
    thirdWord: ['monsters', 'animals', 'ghosts', 'people', 'cars'],
    //methods that will return a random element from the above arrays
    randFirstWord() {
        let randWord = this.firstWord[Math.floor(Math.random() * this.firstWord.length)]
        return randWord;
    },

    randSecondWord() {
        let randWord = this.secondWord[Math.floor(Math.random() * this.secondWord.length)]
        return randWord;
    },

    randThirdWord() {
        let randWord = this.thirdWord[Math.floor(Math.random() * this.thirdWord.length)]
        return randWord;
    },
    //method that will form a fortune with random elements.
    giveFortune () {
        let firstWord = this.randFirstWord();
        let secondWord = this.randSecondWord();
        let thirdWord = this.randThirdWord();

        return `Today you will have ${firstWord} fortune. Make sure you eat lots of ${secondWord} and watch out for ${thirdWord}!`
    }
     
 }



console.log(messages.giveFortune());
