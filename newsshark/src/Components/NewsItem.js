import { Component } from "react";
import { Link } from "react-router-dom";

export default class NewsItem extends Component {
    render() {
        return <>

            <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <div className="h-60">
                        <a href={this.props.url} target="_blank" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img className="rounded-t-lg object-cover h-60 w-full" src={this.props.urlToImage} alt="" />
                        </a>
                    </div>

                    <div className="h-72 p-6">

 

                        <div className="h-1/2 ">
                        <p className="text-gray-600 text-xs">{`Updated At: ${this.props.getMinutes} ${this.props.getMinutes} ${this.props.amPm}`}</p>
                            <a href={this.props.url} target="_blank"><h5 className="text-gray-900 text-xl font-medium font-bold pt-3">{this.props.title}..</h5></a>

                            <p className="text-gray-700 text-base pt-6 ">
                                {this.props.description}..
                            </p>
                        </div>

                        <div className="h-1/2 flex items-end">
                            <a href={this.props.url} target="_blank"><button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Know More..</button></a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    }
}