import { NavLink } from "react-router-dom";
import { useState } from "react";

import {useSelector, useDispatch} from "react-redux";
import { countryName, searchCountryStatus, loadingStatus } from "../Actions/actions";

export default function Header(props) {

    const dispatch = useDispatch();

    const [getCountryName, setGetCountryName] = useState("");


    const storeCountryName = (event) =>{
        const getValue = event.target.value;
        setGetCountryName(getValue);
    };

    const callCountryAPIUsingEnter = (event) =>{
        if(event.key === "Enter")
        {
            dispatch(searchCountryStatus(true));
            // dispatch(loadingStatus(false));
            dispatch(countryName(getCountryName));
        }
    }

    const callCountryAPI = (event) =>{
        dispatch(searchCountryStatus(true));
        // dispatch(loadingStatus(false));
        getCountryName.length !== 0 ? dispatch(countryName(getCountryName)): window.alert("Please Enter a Country Name To Search..")
    }



    return <>

        <div id="outerContaimer" className="sticky top-0 font-mono backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 antialiased">
            <div id="innerContainer" className="flex flex-row px-8 py-4 items-center ">
                <a href="/"
                  id="firstBox" className="flex flex-row text-white hover:text-blue-300 focus:text-blue-300 gap-3 px-4 py-2 w-1/4 items-center rounded-xl border-gray-300 border bg-gradient-to-r from-yellow-500 hover:bg-gradient-to-br focus:ring focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 ">
                    <img src="/Icons/shark.png" className="w-12 h-10 hover:animate-spin duration-300" alt="Icon"></img>
                    <h1 className="font-bold text-2xl">NewsShark</h1>
                </a>

                <div id="secondBox" className="flex flex-row gap-5 font-extrabold text-white text-lg mx-8 w-9/12 ">

                    <NavLink style={({ isActive }) => ({
                        color: isActive ? "#93c5fd" : "white",
                        fontSize: isActive ? "22px" : "19px"
                    })} to="/" className="hover:text-transparent bg-clip-text bg-blue-300">Top</NavLink>

                    <NavLink style={({ isActive }) => ({
                        color: isActive ? "#93c5fd" : "white",
                        fontSize: isActive ? "22px" : "19px"
                    })} to="/sports" className="hover:text-transparent bg-clip-text bg-blue-300">Sports</NavLink>

                    <NavLink style={({ isActive }) => ({
                        color: isActive ? "#93c5fd" : "white",
                        fontSize: isActive ? "22px" : "17px"
                    })} to="/business" className="hover:text-transparent bg-clip-text bg-blue-300">Business</NavLink>
                    <NavLink style={({ isActive }) => ({
                        color: isActive ? "#93c5fd" : "white",
                        fontSize: isActive ? "22px" : "17px"
                    })} to="/health" className="hover:text-transparent bg-clip-text bg-blue-300">Health</NavLink>
                    <NavLink style={({ isActive }) => ({
                        color: isActive ? "#93c5fd" : "white",
                        fontSize: isActive ? "22px" : "17px"
                    })} to="/science" className="hover:text-transparent bg-clip-text bg-blue-300">Science</NavLink>
                    <NavLink style={({ isActive }) => ({
                        color: isActive ? "#93c5fd" : "white",
                        fontSize: isActive ? "22px" : "17px"
                    })} to="/entertainment" className="hover:text-transparent bg-clip-text bg-blue-300">Entertainment</NavLink>
                    <NavLink style={({ isActive }) => ({
                        color: isActive ? "#93c5fd" : "white",
                        fontSize: isActive ? "22px" : "17px"
                    })} to="/technology" className="hover:text-transparent bg-clip-text bg-blue-300">Technology</NavLink>


                </div>


                <div id="thirdBox" className="flex flex-row justify-between p-2 w-1/2 items-center text-white font-bold">
                    <div className="container mx-auto flex flex-row w-auto gap-7">
                        <input type="text" 
                        id="first_name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        name="country" 
                        placeholder="Enter Your Country.." 
                        value={getCountryName} onChange={storeCountryName}
                        onKeyDown={callCountryAPIUsingEnter}
                        />

                        <button className="bg-gradient-to-r from-yellow-500 rounded-md px-5 border-gray-300 border py-2 hover:bg-gradient-to-br focus:outline-none shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 tracking-wide hover:scale-95 transition ease-in-out duration-300" 
                        onClick={callCountryAPI}
                        >Search</button>
                    </div>


                </div>

            </div>
        </div>

    </>
}