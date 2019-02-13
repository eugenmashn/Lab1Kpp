function Randomcreat() {
    let arrNumber=[1,2,3,4,5,6,7,8,9];
    let newNumber=[];
    for(let i=0;i<4;i++){
        let key=Math.round(Math.random()*(9-i)-0.5);
        newNumber.push(arrNumber[key]);
        arrNumber.splice(key,1);

    }
    console.log(newNumber);
    return newNumber;
}

function TestRun(arrOneNumber,arrTwoNumber) {
    let cow=0;
    let bull=0;

    for(let i=0;i<4;i++){
        if(arrOneNumber[i]==arrTwoNumber[i]){
            bull++;
        }
        else {
            for(let j=0;j<4;j++){
                if(arrOneNumber[i]==arrTwoNumber[j]){
                    cow++;
                }
            }
        }

    }

    let CountBullAndCow=[];
    CountBullAndCow[0]=bull;
    CountBullAndCow[1]=cow;
    return CountBullAndCow;
}
function Readlnstr() {
    const readlineSync = require('readline-sync');

    const Numb = readlineSync.question('What is your namber? ');
    return Array.from(Numb);

}

function MainFunct() {
    let inquired=true;
    let rundNumber=Randomcreat();
    let mas=[];/*for breeding  */
    let masRead=[];
    while (inquired){
        masRead=Readlnstr();
        mas=TestRun(rundNumber,masRead);
        if(mas[0]==4){
            console.log('true');
            inquired=false;
        }
        else{

            console.log('false');
            console.log(`bull-`+mas[0]);
            console.log(`cow-`+mas[1]);
        }
    }

}
MainFunct();