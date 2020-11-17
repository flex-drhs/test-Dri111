class Element {
    constructor(id, pos, name) {
        this.id = id
        this.pos=pos;
        this.name = name
    }
    valueOf() {
        return this.name
    }
    toString() {
        return this.name
    }
}
function ctE(raw) {
    let res = {}
    for (let ind in raw) {
        let ele = raw[ind]
        if (ele["id"] && ele["pos"]) {
            res[ind] = new Element(ele.id, ele.pos, ind)
        }
    }
    return res
}

var ELEM = {
    AIR: { id: 0, pos: [0, 0] },
    DIRT: { id: 1, pos: [0,1] },
    DIRT_GRASS: { id: 2, pos: [0,0] },
    STONE: { id: 3, pos: [0,2] },
    ORE: {
        COAL: { id: 4, pos: [1, 0] },
        IRON: { id: 5, pos: [1, 1] },
        GOLD: { id: 6, pos: [1, 2] },
        DIAMOND: { id: 7, pos: [1, 3] },
        STRONTUM: { id: 8, pos: [1, 4] }, //초록
        SULFUR: { id: 9, pos: [1, 5] }, //황토
        COPPER: { id: 10, pos: [1, 6] }, //
        ZINC: { id: 11, pos: [1, 7] }
    },
    BEDROCK: { id: 12, pos: [2, 0] }
}
ELEM = ctE(ELEM)
ELEM.ORE = ctE(ELEM.ORE)
console.log("BlockData.js applied")