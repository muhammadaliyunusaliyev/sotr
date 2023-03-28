
function getObjectsWithFunction(arr, func) {
          let resultArr = arr.filter(obj => {
            return typeof obj[func] === "function";
          });
        
          resultArr.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            } else if (b.name > a.name) {
              return -1;
            } else {
              return 0;
            }
          });
        
          return resultArr;
        }
        
        const objectsArray = [
          { name: "Jobbor", age: 30, sayHello: function() { console.log("Hello"); } },
          { name: "Sharapat", age: 25, sayHi: function() { console.log("Hi"); } },
          { name: "Abdusalim", age: 40 }
        ];
        
        const newArray = getObjectsWithFunction(objectsArray, "sayHello");
        console.log(newArray); 