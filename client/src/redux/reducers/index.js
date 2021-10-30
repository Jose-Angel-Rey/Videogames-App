
const initialState = {
    videogames: [],
    allVideogames: []
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        //------------------------------------
        case "GET_ALL_VIDEOGAMES":
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            };
        //------------------------------------
        case "FILTER_BY_GENRE":
            return { ...state };
        // //------------------------------------
        case "FILTER_BY_ORIGIN":
            let filteredByOrigin = [...state.videogames]
            if (action.payload === "user") filteredByOrigin = [...state.videogames].filter(game => game.createdInDb)
            if (action.payload === "api") filteredByOrigin = [...state.videogames].filter(game => !game.createdInDb)

            return {
                ...state,
                allVideogames: filteredByOrigin
            };
        // //------------------------------------
        case "ORDER_BY_NAME":
            let orderByName = [...state.allVideogames].sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            })
            if (action.payload === "desc") orderByName = orderByName.reverse()

            return {
                ...state,
                allVideogames: action.payload === "none" ? state.videogames : orderByName
            };
        // //------------------------------------
        case "ORDER_BY_RATING":
            let orderByRating = [...state.allVideogames].sort((a, b) => {
                if (a.rating > b.rating) return 1;
                if (a.rating < b.rating) return -1;
                return 0;
            })
            if (action.payload === "desc") orderByRating = orderByRating.reverse()

            return {
                ...state,
                allVideogames: action.payload === "none" ? state.videogames : orderByRating
            };
        // //------------------------------------

        default: return state
    }
}