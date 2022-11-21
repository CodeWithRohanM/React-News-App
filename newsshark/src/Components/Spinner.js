import { Component } from "react";
import Loading from "/Users/rohanmote/Desktop/Test_React_News_App/newsshark/src/Components/loading.gif";

export default class Spinner extends Component {

    render() {
        return <>

            <div className="flex container mx-auto">
                <img src={Loading} alt="Loading" className="flex h-24 w-32 mx-auto"></img>
            </div>
        </>
    }
}