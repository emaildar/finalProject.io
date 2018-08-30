var board = [
    ['monster1','monster2','monster3','monster4'],
    ['monster4','','monster2',''],
    ['','monster3','','monster1'],
    ['','','',''],
    ['','','',''],
    ['plane','','','']
]
var planeCurrentPosition = [5, 0];
var maxX = board[0].length - 1;

function bodyOnKeyDown (event) {
    
    if (event.key === 'ArrowRight') {
        var y = planeCurrentPosition[0];
        var x = planeCurrentPosition[1];

        if (x < maxX) {
            board[y][x] = '';
            board[y][x + 1] = 'plane';

            planeCurrentPosition[1]++;

            resetBoard();

            printBoard();
        }
        
    } else if (event.key === 'ArrowLeft') {
        var y = planeCurrentPosition[0];
        var x = planeCurrentPosition[1];

        if (x > 0) {
            board[y][x] = '';
            board[y][x - 1] = 'plane';

            planeCurrentPosition[1]--;

            resetBoard();

            printBoard();
        }
    } else if (event.key === ' ') {
        // board[1][0] = 'bom'; 
        var y = planeCurrentPosition[0];
        var x = planeCurrentPosition[1];
        var fromIndex = board.length - 2;
        for (var i = fromIndex; i >= 0; i--) {
            if (board[i][x][0] === 'm') {
                board[i][x] = 'bom';
                resetBoard();
                printBoard();
                break;
            }
        }
    }
}


function resetBoard () {
    document.getElementById('canvas').innerHTML = '';
}

function printBoard(){
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        for (var j = 0; j < row.length; j++) {
            var box = document.createElement('div');
                box.setAttribute('class', 'box');

            if (row[j][0] === 'm') {
                var monster = document.createElement('img');
                    monster.setAttribute('src', './img/' + row[j] + '.png');
                    monster.setAttribute('class', 'monster')
                    printBoard
                box.appendChild(monster)
            } else if (row[j][0] === 'p') {
                var plane = document.createElement('img');
                    plane.setAttribute('src', './img/plane.png');
                    plane.setAttribute('class', 'plane')

                box.appendChild(plane)
            } else if (row[j][0] === 'b') {
                var bom = document.createElement('img');
                    bom.setAttribute('src', './img/bom.gif');
                    bom.setAttribute('class', 'bom')

                box.appendChild(bom)
            }

            document.getElementById('canvas').appendChild(box); 
        }
    }
}

printBoard()