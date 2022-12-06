var button = document.getElementById('button-test');
button.addEventListener('click', checkAnagram);
var resultDiv = document.getElementById('result');

function checkAnagram() {
  var str1 = document.getElementById('string1').value;
  var str2 = document.getElementById('string2').value;
  if(str1 !== null && str2 !== null) {
    if(str1.length !== str2.length) {
      resultDiv.innerHTML = "Ces mots ne sont pas des anagrammes.";
      return false;
    }
    var hashTable = {};
    for(var i = 0; i < str1.length; i++) {
      if(hashTable.hasOwnProperty(str1[i])) {
        hashTable[str1[i]] = hashTable[str1[i]] + 1;
    } else {
     hashTable[str1[i]] = 1; 
    }
  }
   
  for(var i = 0; i < str2.length; i++) {
    if(hashTable.hasOwnProperty(str2[i])) {
      hashTable[str2[i]] = hashTable[str2[i]] - 1;
    } else {
      resultDiv.innerHTML = "Ces mots ne sont pas des anagrammes.";
      return false;
    }
  }
    
  for(var i in hashTable) {
    if(hashTable[i] !== 0) {
      resultDiv.innerHTML = "Ces mots ne sont pas des anagrammes.";
      return false;
    } else {
       resultDiv.innerHTML = "Ces mots sont des anagrammes.";
    }
  }
}
}
