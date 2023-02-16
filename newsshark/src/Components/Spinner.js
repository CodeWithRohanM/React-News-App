import { Component } from "react";

export default class Spinner extends Component {

    render() {
        return <>

            <div className="flex flex-col gap-y-5 items-center">
                <h1 className="text-xl text-white font-bold tracking-widest antialiased">Curating Latest News Just For You.. 🗞️🗞️</h1>
                <img src="/loadingGif.gif" alt="Loading" className="h-24 w-32 rounded-2xl"></img>
            </div>
        </>
    }
}