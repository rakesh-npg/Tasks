
let test = 'Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the "small" ideas of individual sentences to a "bigger" idea, paragraph structure is essential to any writing for organization, flow, and comprehension. Students have a lot of questions when it comes to writing a paragraph: How many sentences should you use? How do you transition within a paragraph? When do you end a paragraph? Etc. Below we explain everything you need to know about paragraph structure to write like an expert, including several paragraph examples.';


//num sentence 
let array = test.split('.');
console.log("Numbe of sentence")
len = parseInt(array.length) -1;
console.log(len)

//num words
array = test.split(' ');
console.log("Number of words")
console.log(array.length)


//num char
let charNum = 0;
for(let i in array){
    charNum+= array[i].length
    //console.log(i)
}
console.log("Nuber of chars")
console.log(charNum);

//seatch 

lol2 = test.match(/paragraph/g);
console.log('total occurances of word'); 
console.log(lol2.length)

//num of special 
let az = /[a-z]/
let AZ = /[A-Z]/
let num = /[0-9]/
let specialChar = 0;
for (i in test) { 
    if ((az.test(test[i]) == false) && (AZ.test(test[i]) == false) && (num.test(test[i]) == false) && (test[i] != " ")){
        specialChar+=1
    } 
}
console.log('total special char'); 
console.log(specialChar); 

//replace
sentence2 = test.replace(/paragraph/g, "para"); 
//console.log(sentence2)

//slice
let dotval = 0; 
let iLoc; 
for (i in test){
        
    if (test[i] == '.'){
        dotval+=1
    }
    if (dotval == 2){
        iLoc = i; 
        break;
    }

}
console.log('location of second para'); 
i = parseInt(i) + 1;
console.log(i);
let second_sentence = test.slice(i)
console.log(second_sentence)
