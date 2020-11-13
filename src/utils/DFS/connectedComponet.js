var points = []
var graph = []


const DFS = function(index, groupCount){
    thisPoint = points[index]
    if(!thisPoint.visited){
        thisPoint.visited = true
        thisPoint.group = groupCount
        for(var ii = 0; ii < graph[index].length; ii++){
            DFS(graph[index][ii], groupCount)
        }
    }
}


const connectedComponet = function(gg){
    //initializing
    graph = gg
    for(var ii = 0; ii < graph.length; ii++){
        points.push({
            group: -1,
            visited: false
        })
    }

    //applying DFS
    var groupCount = 0
    for(var ii = 0; ii < graph.length; ii++){
        if(!points[ii].visited){
            DFS(ii, groupCount)
            groupCount++
        }        
    }

    //get the result
    var result = []
    for(var ii = 0; ii < groupCount; ii++){
        result.push([])
    }
    for(var ii = 0; ii < points.length; ii++){
        result[points[ii].group].push(ii)
    }

    return result
}


module.exports = connectedComponet