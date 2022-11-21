import { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import LoadingBar from 'react-top-loading-bar'
import ProgressBar from 'react-progressbar-on-scroll'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {





    constructor() {
        super();
        this.state = {
            articles: [],
            totalResults: 0,
            pageNumber: 1,
            loading: true,
            progress: 0,
        }
    }



    componentDidMount() {

        this.setState({
            progress: 20,
        })

        document.body.style.backgroundImage = `url(${this.props.backgroundImage})`;

        let p = fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=6&apiKey=bec505befbe44992aab791d6837d0db1`);



        p.then(response => response.json())
            .then(data => this.setState({
                articles: data.articles,
                totalResults: data.totalResults,
                loading: false,
                progress: 100,
            }))

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


    imagesArray = ["https://images.moneycontrol.com/static-mcnews/2022/10/sensex_nifty1-2-770x433.jpg",
        "https://images.moneycontrol.com/static-mcnews/2022/10/sensex1-1-770x433.jpg",
        "https://images.moneycontrol.com/static-mcnews/2022/08/fandosensexniftyderivative-1-770x433.jpg"];

    months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb",]



    // handlePrevious = () => {


    //     let p = fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=6&apiKey=2be814ed1098453da31bc02d97d78a52&page=${this.state.pageNumber - 1}`);

    //     this.setState({
    //         loading: true,
    //         progress: 30,
    //     })

    //     p.then(response => response.json())
    //         .then(data => this.setState({
    //             articles: data.articles,
    //             totalResults: data.totalResults,
    //             pageNumber: this.state.pageNumber - 1,
    //             loading: false,
    //             progress: 100,
    //         }))

    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }



    // handleNext = () => {

    //     let p = fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=6&apiKey=2be814ed1098453da31bc02d97d78a52&page=${this.state.pageNumber + 1}`);


    //     this.setState({
    //         loading: true,
    //         progress: 30,
    //     })

    //     p.then(response => response.json())
    //         .then(data => this.setState({
    //             articles: data.articles,
    //             totalResults: data.totalResults,
    //             pageNumber: this.state.pageNumber + 1,
    //             loading: false,
    //             progress: 100,
    //         }))

    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;


    // }


    hasMorePosts = () => {


        let p = fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=6&apiKey=bec505befbe44992aab791d6837d0db1&page=${this.state.pageNumber + 1}`);



        p.then(response => response.json())
            .then(data => this.setState({
                articles: this.state.articles.concat(data.articles),
                pageNumber: this.state.pageNumber + 1,
                loading: false,
            }))


    }


    render() {


        const date = new Date();
        const getTodaysDate = date.getDate() + " " + this.months[date.getMonth()] + ", " + date.getFullYear();

        return <>

            <ProgressBar
                color="#ffff00"
                height={7}
                direction="right"
                position="top"
                gradient={true}
                gradientColor="#eee"
            />


            <LoadingBar
                color='#FFEB3B'
                gradient={true}
                transitionTime={1000}
                progress={this.state.progress}
                height={8}

            />



            <div id="headline" className="flex container mx-auto text-white items-center my-12">
                <div className="mx-auto gap-6 flex flex-row items-center w-auto px-44 py-3 bg-red-300 text-center justify-center font-bold bg-gradient-to-r from-red-300 via-red-500 to-red-300 rounded-full tracking-wide">
                    <img src={this.props.categoryIcon} className="w-15 h-14"></img>
                    <h1 className="text-5xl">TOP {this.props.headline} HEADLINES</h1>
                </div>
            </div>

            {this.state.loading && <Spinner />}


            <div id="displayDate" className="flex container mx-auto text-white items-center my-12">
                <h1 className="flex container mx-auto w-auto px-12 py-2 bg-red-300 text-3xl text-center justify-center font-bold bg-gradient-to-r from-red-200 via-red-500 to-red-200">Today: {getTodaysDate}</h1>
            </div>


            <InfiniteScroll
                next={this.hasMorePosts}
                dataLength={this.state.articles.length}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner />}
            >

                <div id="setLayout" className="flex container mx-auto grid grid-cols-3 gap-x-4 my-20 gap-y-12">

                    {!this.state.loading && this.state.articles.map((element) => {

                        return <NewsItem
                            key={element.url}
                            url={element.url}
                            urlToImage={element.urlToImage ? element.urlToImage : this.imagesArray[Math.floor(Math.random() * this.imagesArray.length)]}
                            title={element.title.slice(0, 60)}
                            description={element.description ? element.description.slice(0, 90) : "Click On The Title To Know More..."} />


                    })}
                </div>
            </InfiniteScroll>






            <div id="fotterButtons" className="flex container mx-auto flex-row justify-between my-12">

                <button disabled={this.state.pageNumber <= 1} type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-20 py-2.5 text-center mr-2 mb-2" onClick={this.handlePrevious}>&laquo; Previous</button>



                <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Page {this.state.pageNumber}</button>

                <button disabled={this.state.pageNumber >= Math.ceil(this.state.totalResults / 6)} type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-20 py-2.5 text-center mr-2 mb-2" onClick={this.handleNext}>Next &raquo;</button>

            </div>

        </>
    }
}
