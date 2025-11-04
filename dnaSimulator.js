// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)] ;
}


// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand;
}




//factory function to create specimen objects
const pAeqourFactory = (specimenNum, dna) => {
  //console.log(specimenNum, dna);


  //returns specimen object
  return {  
    specimenNum,      //property value shorthand
    dna,


    //randomly changes a base and also returns dna
    mutate(){
      const randBaseIndex = Math.floor(Math.random() * 15);
      let newBase = '';
      do{
        newBase = returnRandBase();
      }
      while(this.dna[randBaseIndex] === newBase);
      this.dna[randBaseIndex] = newBase;
      //optional return statement
      return this.dna;
    },


    //compares DNA bases of two different specimen
    compareDNA(anotherSpecimen){
      let count = 0;
      for(let i=0; i<this.dna.length; i++){
        if(this.dna[i] === anotherSpecimen.dna[i]){
          count++;
        }
      }
      //returns percentage match in DNA
      const percentMatch = Math.floor((count / this.dna.length) * 100);
      console.log(`${this.specimenNum} and ${anotherSpecimen.specimenNum} have ${percentMatch}% DNA in common`);
      return percentMatch;
    },


    //returns survival prediction
    willLikelySurvive(){
      let count = 0;
      this.dna.forEach((dnaBase) => {
        dnaBase === 'C' || dnaBase === 'G' ? count++ : null;
      })
      //it is same as comparing in percentage because 60% is 0.6
      return (count / this.dna.length) >= 0.6 ? true : false;
    },


    //creates a new array where each base is replaced by its complement
    complementStrand(){
      const complementaryStrand = this.dna.map((dna) => {
        if(dna === 'A'){
          return 'T';
        }
        else if(dna === 'T'){
          return 'A';
        }
        else if(dna === 'C'){
          return 'G';
        }
        else if(dna === 'G'){
          return 'C';
        }
        else{
          return dna;
        }
      });
      return complementaryStrand;
    }
    };
};


//function to create specimens
const createSpecimen = (numOfSpecimen) => {
  let specimensArr = [];
  for(let i=1; i<=numOfSpecimen; i++){
    specimensArr.push(pAeqourFactory(i, mockUpStrand()));
  }
  return specimensArr;
};


//function to find the most related DNAs
const findRelatedDNAs = (specimensArr) => {
let instancesMatchPercentArr = [];
for(let i=0; i<specimensArr.length-1; i++){
  for(let j=i+1; j<specimensArr.length; j++){
    //returns percentage matched
    const value = specimensArr[i].compareDNA(specimensArr[j]);
    const key = `${specimensArr[i].specimenNum} and ${specimensArr[j].specimenNum} `;
    instancesMatchPercentArr.push({[key]: value});
  }
}
//console.log(instancesMatchPercentArr);
//stores percents/values of the objects
let percentArr = [];
for(let obj of instancesMatchPercentArr){
  percentArr.push(Object.values(obj)[0]);
}
//finds the max percent of match
const mostRelatedMatchPercent = Math.max(...percentArr);


let mostRelatedPair = '';
for (let obj of instancesMatchPercentArr) {
  //checking the value of every object inside the array for the match
  if (Object.values(obj)[0] === mostRelatedMatchPercent) {
    mostRelatedPair = Object.keys(obj)[0];
    break;
  }
}
console.log(mostRelatedPair + ' with a percentage match of ' + mostRelatedMatchPercent);
}


//finding related specimens
findRelatedDNAs(createSpecimen(3));