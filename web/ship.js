const height = 9;
const width = 9;

class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }    
}

class Field {
    constructor(x, y) {
        this.pos = new Position(x, y);
        this.status = '';
        this.classes = [];
    };
    getPos() {
        return this.pos;
    }
    getStatus() {
        return this.status;
    }
    getClasses() {
        return this.classes;
    }
    

}

var vue = new Vue({
    el: '#app',
    data: {
        height: height,
        width: width,
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
    computed: {
        fields: function() {
            var fields = [];
            for (i = 0; i < this.height; i++) {
                for (i2 = 0; i2 < this.width; i2++) {
                    fields.push(new Field(i2, i))
                }
            }
            return fields;
        },
        fieldLayout: function() {
            return {
                flex: "0 0 " + 100 / this.width + "%",
            }
        },

    }
})
