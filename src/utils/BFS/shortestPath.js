const shortestPath = function(source, end, graph){
   
    var points = []
    for(var ii = 0; ii < graph.length; ii++){
        points.push({
            visited: false,
            prev: -1
        })
    }

    
    var queue = [source]
    var index = source
    var connected = false
    while(queue.length != 0){
        graph[index].forEach(function(item){
            if(!points[item].visited){
                queue.push(item)
                points[item].visited = true
                points[item].prev = index
            }            
        })

       
        if(index === end){
            connected = true
            break
        }    
        
        index = queue.shift()
    }

    var result = [end]
    if(connected){
        for(var ii = end; points[ii].prev != -1; ii = points[ii].prev){
            result.push(points[ii].prev)
        }
    }
    return result.reverse()
}


module.exports = shortestPath