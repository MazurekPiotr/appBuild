var tinymapEditor = function() {
    var tiles = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]];
    function Loop(){
        for(var y = 0; y < tiles.length; ++y) 
        {
            for(var x = 0; x < tiles[y].length; ++x) 
            {
                drawTile(tiles[y][x]);
            }  
        }
    }
    function drawTile(){
        
    }
}