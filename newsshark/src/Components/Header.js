import Shark from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/Icons/shark.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import {useSelector, useDispatch} from "react-redux";
import { countryName } from "../Actions/actions";

export default function Header(props) {

    const currentCountryName = useSelector((state)=> state.changeNews.country);
    const dispatch = useDispatch();

    const [getCountryName, setGetCountryName] = useState("");


    const storeCountryName = (event) =>{
        const getName = event.target.value;
        setGetCountryName(getName);
    };


    const callCountryAPI = () =>{
        getCountryName.length === 0 ? window.alert("Please Enter a Country Name To Search..")
          : dispatch(countryName(getCountryName));
    }



    return <>

        <div id="outerContaimer" className="sticky top-0 font-mono backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
            <div id="innerContainer" className="flex flex-row px-8 py-4 items-center ">
                <NavLink style={({ isActive }) => ({
                    color: isActive ? "#93c5fd" : "white",
                })} to="/" id="firstBox" className="flex flex-row gap-3 px-4 py-2 w-1/4 items-center rounded-full bg-gradient-to-r from-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 ">
                    <img src={Shark} className="w-12 h-10 " alt="Icon"></img>
                    <h1 className="font-bold text-2xl">NewsShark</h1>
                </NavLink>

                <div id="secondBox" className="flex flex-row gap-5 font-extrabold text-white text-lg mx-8 w-9/12">

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
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="country" placeholder="Enter Your Country" value={getCountryName} onChange={storeCountryName} />

                        <button className="bg-gradient-to-r from-yellow-500 rounded-full px-3 py-2 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80" onClick={callCountryAPI}
                        >Get News</button>
                    </div>


                </div>

            </div>
        </div>

    </>
}