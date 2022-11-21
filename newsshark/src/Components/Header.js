import { Component } from "react";
import Shark from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/Icons/shark.png";
import { Link } from "react-router-dom";

export default class Header extends Component {

    render() {
        return <>

            <div id="outerContaimer" className="sticky top-0 font-mono backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
                <div id="innerContainer" className="flex flex-row px-8 py-4 items-center ">
                    <Link to="/" id="firstBox" className="flex flex-row gap-3 px-4 py-2 w-1/4 items-center rounded-full bg-gradient-to-r from-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 ">
                        <img src={Shark} className="w-12 h-10 " alt="Icon"></img>
                        <h1 className="font-bold text-2xl text-white">NewsShark</h1>
                    </Link>

                    <div id="secondBox" className="flex flex-row gap-5 font-extrabold text-white text-lg mx-8 w-9/12">

                        <Link to="/" className="hover:text-transparent bg-clip-text bg-blue-300">Top</Link>
                        <Link to="/sports" className="hover:text-transparent bg-clip-text bg-blue-300">Sports</Link>
                        <Link to="/business" className="hover:text-transparent bg-clip-text bg-blue-300">Business</Link>
                        <Link to="/health" className="hover:text-transparent bg-clip-text bg-blue-300">Health</Link>
                        <Link to="/science" className="hover:text-transparent bg-clip-text bg-blue-300">Science</Link>
                        <Link to="/entertainment" className="hover:text-transparent bg-clip-text bg-blue-300">Entertainment</Link>
                        <Link to="/technology" className="hover:text-transparent bg-clip-text bg-blue-300">Technology</Link>


                    </div>


                    <div id="thirdBox" className="flex flex-row justify-between p-2 w-1/2 items-center text-white font-bold">
                        <div className="container mx-auto flex flex-row w-auto gap-7">
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Country"/>
                        
                        <a href="#" className="bg-gradient-to-r from-yellow-500 rounded-full px-3 py-2 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 ">Get News</a>
                        </div>


                    </div>

                </div>
            </div>

        </>
    }
}