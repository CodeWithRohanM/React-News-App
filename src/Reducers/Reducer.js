const initialState = {
    country: "in",
    searchCountryStatus : false,
    loading: true,
};


const changeNews = (state = initialState, action) => {

    switch (action.type) {
        case "COUNTRY_NAME": {
            return {
                ...state,
                country: action.payLoad,
            }
        };

        case "SEARCH_COUNTRY_STATUS": {
            return {
                ...state,
                searchCountryStatus : action.payLoad,
            }
        };

        case "LOADING_STATUS":{
            return {
                ...state,
                loading: action.payLoad,
            }
        };

        default: return initialState;
    }
};


export default changeNews;