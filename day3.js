const input = 
`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

//4361

const inputLines = input.split("\n")

function containsNumber(str) {
    return /\d/.test(str);
  }

function containsPeriod(str) {
    return str.indexOf('.') !== -1
}

function containsSymbol(str) {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    return format.test(str)
}

const numbersToAdd = []
let counter = 0

inputLines.map(line => {
    counter = counter + 1
    const lengthOfLine = line.length
    for(let i = 0; i < line.length; i ++) {
        if(containsNumber(line[i])) {
            let numberAdjacentLeft = null;
            if(i > 0) {
                numberAdjacentLeft = containsNumber(line[i - 1])
            }
            
            // get the full number
            let number = line[i]
            if(containsNumber(line[i-1])) number = line[i-1].concat(number)
            if(containsNumber(line[i-2])) number = line[i-2].concat(number)

            console.log({number}, number.length)

            let numberAdjacentRight = containsNumber(line[i + 1])
            if(!numberAdjacentRight) {
                if(!containsPeriod(line[i + 1])) {
                    numbersToAdd.push(number)
                    return
                }
                if(line[i-number.length]!== undefined && !containsPeriod(line[i-number.length])) {
                    numbersToAdd.push(number)
                    return
                }
                    if(counter === 1) {
                        //check below lines but not above
                        console.log('first line ', {line}, {inputLines}, 'should be second line ', inputLines[counter])
                        if(containsSymbol(inputLines[counter])) {
                            //this means the line below has a symbol
                            //check where the symbol is
                            let symbolPositions = []
                            for(let j = 0; j < inputLines[counter].length; j++) {
                                console.log('mmma aaa', inputLines[counter][j], {j})
                                if(containsSymbol(inputLines[counter][j])) symbolPositions.push(j)
                            }
                        console.log({symbolPositions}, {number})
                        }
                        return
                    }

                    if(counter > 1 && counter < inputLines.length) {
                        //check above and below lines
                    }

                    if(inputLines.length === counter) {
                        //check above but not below
                    }

                    console.log({line}, {inputLines}, inputLines.length, counter)
                    //check above and below for adjacent characters
                    console.log({counter})

                    // add it to the good ones

                    console.log({numbersToAdd})
                }
                
                console.log({i}, {line}, 'contains period: ', containsPeriod(line[i+1]))
        }
    }
})