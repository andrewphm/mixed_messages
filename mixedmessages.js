const messages = {
    firstWord: ['bad', 'terrible', 'okay', 'good', 'amazing', 'unbelievable'],
    secondWord: ['fruits', 'vegetables', 'sweets', 'desserts', 'sushi'],
    thirdWord: ['monsters', 'animals', 'ghosts', 'people', 'cars'],

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
  
    giveFortune () {
        let firstWord = this.randFirstWord();
        let secondWord = this.randSecondWord();
        let thirdWord = this.randThirdWord();

        return `Today you will have ${firstWord} fortune. Make sure you eat lots of ${secondWord} and watch out for ${thirdWord}!`
    }
     
 }

 //create methods that return a random property.
//Create function that creates the mixed message.

// Today you will have ${first} fortune. Make sure you eat lots of ${second} and watch out for ${third}.   

console.log(messages.giveFortune());