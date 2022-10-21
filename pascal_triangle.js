function generate(numRows) {
    if (numRows == 0) return []
    var triangle = numRows == 1 ? [1] : [[1],[1,1]]
    // var triangle 
    // if(numRows == 1) 
    //     triangle = [1] 
    //     else 
    //     triangle = [[1], [1,1]]
        
    for (let row=2; row<numRows; row++) {
        var previous_row = triangle[row-1]
        var currentrow = [1]
        for (var y =1; y<previous_row.length; y++){
            currentrow.push(previous_row[y-1]+previous_row[y])
        }
        currentrow.push(1)
        triangle.push(currentrow)
    }

    return triangle

}

var pon = generate(0)
console.log(pon)