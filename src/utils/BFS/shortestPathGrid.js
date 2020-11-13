const shortestPathGrid = function(source, end, graph){
    var queue = [source]
    var nodes = []

    for(var row = 0; row < graph.length; row++){
        var line = []
        for(var col = 0; col < graph[row].length; col++){
            line.push({
                visited: false,
                blocked: graph[row][col] === '#',
                prev: [-1, -1]
            })
        }
        nodes.push(line)
    }
    

    var connected = false
    while(queue.length){
        var thisIndex = queue.shift()
        var thisNode = nodes[thisIndex[0]][thisIndex[1]]
        if(!thisNode.visited){
                thisNode.visited = true

                if(thisIndex[0] === end[0] && thisIndex[1] === end[1]){
                    connected = true
                    break
                }

                const dirRow = [0, 0, 1, -1]
                const dirCol = [1, -1, 0, 0]
                for(var ii = 0; ii < 4; ii++){
                    var neighborIndex = [thisIndex[0] + dirRow[ii], thisIndex[1] + dirCol[ii]]
                    if(neighborIndex[0] >= 0 && neighborIndex[0] < graph.length &&
                        neighborIndex[1] >= 0 && neighborIndex[1] < graph[0].length){
                            var neighborNode = nodes[neighborIndex[0]][neighborIndex[1]]
                            if(!neighborNode.blocked && !neighborNode.visited){
                                queue.push([neighborIndex[0], neighborIndex[1]])
                                nodes[neighborIndex[0]][neighborIndex[1]].prev = [thisIndex[0], thisIndex[1]]
                            }      
                        }
                                      
                }
            }
    }


    var result = ['not connected']
    if(connected){
        var route = []
        thisIndex = end
        prevIndex = nodes[thisIndex[0]][thisIndex[1]].prev
        while(prevIndex[0] != -1 && prevIndex[1] != -1){
            route.unshift(thisIndex)
            thisIndex = [prevIndex[0], prevIndex[1]]
            prevIndex = nodes[thisIndex[0]][thisIndex[1]].prev
        }
        result = route
    }
    

    return result
}



module.exports = shortestPathGrid