'use strict';

/* -------------- Fields -------------- */
// Using sample of the encoded text from https://www.bbc.com/news/science-environment-13001382
let encodedMsg = 'ACGGTGATAAGTAAGTGCATAGCCTAT';

// elements
let dnaKey;
let dnaDisp;

/* -------------- Helperfunctions -------------- */
// onlyUnique function from https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
function onlyUnique(value,index,self){
  return self.indexOf(value) === index;
}

function clear(element){
  element.selectAll('div').remove();
}

function clearAll(){
  clear(dnaKey);
  clear(dnaDisp);
}

function updateVals(d){
  console.dir(d);
  console.dir(this);
  
  let newText = this.value | ' ';
  dnaDisp.selectAll(`.val-${d}`)
    .text(this.value);
  
  let values = '';
  dnaDisp.selectAll('.text-unit .value').each(function(d){
    values += d3.select(this).text();
  });
  window.XENO_VARS.decodedMsg = values;
}

function displayArray(arr){
  clearAll();
  let options = arr.filter(onlyUnique);
  
  let keyDivs = dnaKey.selectAll('div')
    .data(options)
    .enter()
    .append('div')
    .attr('class',(d) => `key-div`);
  keyDivs.append('label')
    .text((d) => d);
  keyDivs.append('input')
    .attr('type','text')
    .on('change',updateVals);
  
  let textDivs = dnaDisp.selectAll('div')
    .data(arr)
    .enter()
    .append('div')
    .attr('class','text-unit');
  textDivs.append('div')
    .attr('class','code')
    .text((d) => d);
  textDivs.append('div')
    .attr('class',(d) => `value val-${d}`)
    .text(' '); 
}

function chunks(size,str){
  var length = str.length;
  var chunkArray = [];
  for(var i = 0; i < length; i+=size){
    chunkArray.push(str.substring(i,i+size));
  }
  return chunkArray;
}

function displayChunked(num){
  displayArray(chunks(num,encodedMsg))
}