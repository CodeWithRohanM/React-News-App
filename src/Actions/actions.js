const countryName = (country) =>{
    return {
        type: "COUNTRY_NAME",
        payLoad: country,
    }
};

const searchCountryStatus = (status) =>{
    return {
        type: "SEARCH_COUNTRY_STATUS",
        payLoad: status,
    }
};

const loadingStatus = (status) =>{
    return {
        type: "LOADING_STATUS",
        payLoad: status,
    }
};


export {countryName, searchCountryStatus, loadingStatus};