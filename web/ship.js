class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

var vue = new Vue({
    el: '#app',
    data: {
        height: 9,
        width: 9,
        last_pick: '',
        ships: [],
    },
    methods: {
        click: function(id) {
            if (this.last_pick === '') {
                this.last_pick = id;
            } else {
                this.placeShip(this.last_pick, id);
                this.last_pick = '';
            }
        },
        placeShip: function(start, end) {
            this.ships.push({
                start: new Position(start.split('-')[0], start.split('-')[1]),
                end: new Position(end.split('-')[0], end.split('-')[1]), 
            });
        }
    },
})