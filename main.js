function activate() {
    console.log('My First (Technically Second) Console Project!');

    var firstName = "Sidharth";
    console.log(firstName);

    var lastName = "Simha";
    console.log(lastName);

    var fullName = firstName.concat(" ", lastName)
    console.log(fullName);

    var number1 = 10;
    var number2 = 5;
    var numberFull = number1 + number2;
    console.log(numberFull);

    var sqareRoot = Math.sqrt(25);
    console.log(sqareRoot);

    var roundNumber = 49.93939393;
    var numberRound = roundNumber.toFixed(0);
    console.log(numberRound);

    var powNumber1 = 2;
    var powNumber2 = 3;
    var numberPow = Math.pow(powNumber1, powNumber2);
    console.log(numberPow);
}