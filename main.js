//READ COMMENTS FOR MY THOUGHTS ON EACH INDIVIDUAL ASSIGNMENT

//Reverse String Assignment
function swap(str){
  let rev = "";
  for (var i = str.length - 1; i >= 0; i--){
    rev += str[i];
  }
  return rev;
}
swap("Hello")


//I'll try my best explaining this one.
//We are using a swap function. We declare a variable called rev and put an empty string. Now we use a for loop with i as the placeholder.
//(var i = str.length - 1) is a set up for (i >= 0) since it's gonna loop until the value is 0
//(i >= 0; i--) means that if the string length is greater than 0, decrement until there is no string length
//rev +=str[i] making the string an array and adding up the letters in reverse order. This is when we return rev and call the function
//---------------------------------------------------------------------

//FizzBuzz Assignment
for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
//We are using i as a place holder and looping it 100 times with i++ being an increment. With that first part, we can already list things from 1 to 100. In order to add fizz, buzz, and fizzbuzz in the list, we must use an if statement. If (i % 15 == 0) console.log "FizzBuzz" means that if the number in the list has a remainder of 0 after we divide it, we swap out the number and replace it with "FizzBuzz". For example, the number 15 would have a remainder of 0, thus it gets replaced with "FizzBuzz". The same goes for i % 3 and i % 5
//I had fun with this one.
//---------------------------------------------------------------------

//Piglatin Assignment
function translate(str) {
     str=str.toLowerCase();
     var n =str.search(/[aeiuo]/);
     switch (n){
       case 0: str = str+"way"; break;
       case -1: str = str+"ay"; break;
       default :
         //str= str.substr(n)+str.substr(0,n)+"ay";
         str=str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
       break;
    }
    return str;

}
translate("paragraphs")

//Further research is needed with this one.
//---------------------------------------------------------------------

//Final thoughts
//The reason I was able to explain the second one so well is because I was able to understand the previous workshop with relative ease. Using the knowledge I was able to explain the first part correctly. With this workshop, I didn't know you can use the % symbol to make "true" statements. This is something that is really interesting that I will take note of next time.

//As for the first and third one, I couldn't make heads or tails of this, even with the slack notes, and I need to do further research as well as guidence. I'm terribly sorry for this, and hopefully I'll be able to understand instructions 1 and 3 more clearly.
