
export const initialRes = { query: ` query { products { name productType release } } ` }


export const resReducer = function (resSate, action) {

    switch (action.type) {
        case "recomment":
            return { query: ` query { products { name productType release } } ` };
        case "product":
            return { query: ` query { products { name productType release } } ` };
        case "blog":
            return { query: ` query { blogs { name author_ID release } } ` };
        case "del":
            return { playload: console.log('del case') };
        case "action":
            return { playload: console.log('action case') };
        default:
            throw new Error();
    }

}