// Code your solution here


        const findMatching = (name, match) => name.filter(
              goldylox => goldylox.toLowerCase() === match.toLowerCase()
            );
          
        const fuzzyMatch = (name2) => name2.filter(
            bear => bear.startsWith('s')
        );


// const result = words.filter(word => word.length > 6);

// findMatching- This function takes an array of drivers' 
// names and a string as arguments, 
// and returns the matching list of drivers. 
// The function should be case insensitive.


    // [1, 2, 3, 4, 5].filter(function (num) {
    //     return num > 3;
    //   });
      