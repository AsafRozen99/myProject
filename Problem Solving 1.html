Write a function which takes in a string and returns counts of each character in the string.




// can i restate the problem in my own words?


// what are the inputs that go into the problem?


// what are the outputs that should come from the solution to the problem?


// can the outputs be determined from the inputs? In other words, do i have enough information to solve the problem?


// how should i label the important piecess of data that are a part of the problem?



//         Explore Examples

- write down simple examples
charCount("aaaa"); // {a:4, do we need- b:0, c:0?}
charCount("hello"); // {h:1, e:1, l:2, o:1}

- write complex examples
charCount("a girl has no name, actually maybe 3 names."); // do we store spaces?
charCount("Hello hi"); // do we store uppercase H and lowercase h? ignore casing?

- write examples with Empty inputs or invalid inputs
charCount()
charCount("")
charCount(number) // invalid
return an empty {}?  a null?  false? undefined? error?


//  Break it down
//  Explicity write out the steps you need to take.
think about the code you'll write before you write it,
and help you catch any lingering conceptual issues or misunderstandings
before you dive in and have to worry about details (e.g. language syntex) as well.


so lets go back to our problem


Write a function which takes in a string and returns counts of each character in the string.

function charCount(str){
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the count for those characters;

  // make object to return at end
  var result = {};
  // loop over string, for each character...
  for(var i = o; i < str.length; i++){
    var char = str[i].toLowerCase();
    // if character is something else (space, period, etc.) don't take action
    if (/[a-z0-9]/.test(char)){
      // if the character is a number/letter AND is a key in our object, add one to the count
      if (result[char] > 0){
        result[char]++;
      } else {
        // if the character is a number/letter AND is not in object, add it to object and set value to one
        result[char] = 1;
      }
    }
  }
  // return object at end
  return result;
}


// Look back and Refactor
congrats on solving it, but you're not done.

Can you check the result?

Can you derive the result differently?

Can you udnerstand it at a glance?

Can you use the result or method for some other problems?

Can you improve the performance of your solution?

Can you think of other ways to refactor?

How have other people solved this problem?


function charCount(str){
  <!-- replace var to let (ECMA2015) -->
  let obj = {};
  // work with a for-of loop
  for(let char of str){
    // dosent need to define char var again, work with char and not str[i]
    char = char.toLowerCase();
    // checking for a certain pattern, in our case an  alphanumeric.
    // we might replace regualr exressions in char code, which is faster.
    if (/[a-z0-9]/.test(char)){
      <!-- if (result[char] > 0){
        result[char]++;
      } else {
        result[char] = 1;
      } -->
      // takes a character such as "a", access a corresponding value in our object,
      // if its truthy, means there is a value in there already, we're going to add one to it.
      // or if it's falsy, we're going to set it equal to 1.
      obj[char] = ++obj[char] || 1
    }
  }
  return obj;
}


<!-- replacing regualr exressions in char code, which is faster. -->

function isAlphaNumberic(char){
  let code = char.charCodeAt(0);
  <!-- Give us the first character which is the only character... -->
  if(!(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96  && code < 123)){
      return false;
    }
    return true;
}

<!-- then run... -->

function charCount(str){
  <!-- replace var to let (ECMA2015) -->
  let obj = {};
  for(let char of str){
    char = char.toLowerCase();
    <!-- changed if statement to using isAlphaNumberic function on char -->
    if (isAlphaNumberic(char)){
      obj[char] = ++obj[char] || 1
    }
  }
  return obj;
}


<!-- we can also replace the  lowercase changing to only after checking
that characters are valid -->

function charCount(str){
  let obj = {};
  for(let char of str){
    if (isAlphaNumberic(char)){
    char = char.toLowerCase();
      obj[char] = ++obj[char] || 1
    }
  }
  return obj;
}
