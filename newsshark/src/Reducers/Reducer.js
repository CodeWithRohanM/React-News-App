const initialState = {
    country: "in",
};


const changeNews = (state = initialState, action)=>{

    switch(action.type)
    {
        case "COUNTRY_NAME":{
            return {
                ...state,
                country: action.payLoad,
            }
        };

        default: return initialState;
    }
};


export default changeNews;