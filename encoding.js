'use strict';

/* -------------- Fields -------------- */
// Using sample of the encoded text from https://www.bbc.com/news/science-environment-13001382
let encodedMsg = 'ACGGTGATAAGTAAGTGCATAGCCTAT';

// elements
let dnaKey;
let dnaDisp;

/* -------------- Helperfunctions -------------- */
function chunks(size,str){
  var length = str.length;
  var chunkArray = [];
  for(var i = 0; i <= length; i+=size){
    chunkArray.push(str.substring(i,i+size));
  }
  return chunkArray;
}

/* -------------- Setup functions -------------- */
function setup(){
  dnaKey = d3.select('#dna-key');
  dnaDisp = d3.select('#dna-disp');
  
  console.dir(chunks(1,encodedMsg));
  console.dir(chunks(3,encodedMsg));
}

window.onload = setup;