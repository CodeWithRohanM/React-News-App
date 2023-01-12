import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import LoadingBar from 'react-top-loading-bar'
import ProgressBar from 'react-progressbar-on-scroll'
import InfiniteScroll from "react-infinite-scroll-component";

import { useSelector, useDispatch } from "react-redux";

export default function News(props) {

    const currentCountryName = useSelector((state)=> state.changeNews.country);
    const dispatch = useDispatch();



    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);


    const [updateCountry, setUpdateCountry] = useState(currentCountryName);


    // const [progress, setProgress] = useState(0);



    useEffect(() => {


        setProgress(20);

        console.log("Country Name = "+currentCountryName);

        document.body.style.backgroundImage = `url(${props.backgroundImage})`;

        const callAPI = async () => {
            try {
                let p = await fetch(`https://newsapi.org/v2/top-headlines?country=${currentCountryName}&category=${props.category}&pageSize=6&apiKey=17acba01570847a69a036cc5a55e3b31&page=${pageNumber}`);
    
                const getData = await p.json();
    
                setArticles(getData.articles);
                setTotalResults(getData.totalResults);
                setPageNumber(pageNumber+1);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        callAPI();

        setProgress(100);
        
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }, [currentCountryName]);


    const imagesArray = ["https://images.moneycontrol.com/static-mcnews/2022/10/sensex_nifty1-2-770x433.jpg",
        "https://images.moneycontrol.com/static-mcnews/2022/10/sensex1-1-770x433.jpg",
        "https://images.moneycontrol.com/static-mcnews/2022/08/fandosensexniftyderivative-1-770x433.jpg"];

    const months = ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb",]



    // handlePrevious = () => {


    //     let p = fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=6&apiKey=2be814ed1098453da31bc02d97d78a52&page=${pageNumber - 1}`);

    //     setState({
    //         loading: true,
    //         progress: 30,
    //     })

    //     p.then(response => response.json())
    //         .then(data => setState({
    //             articles: data.articles,
    //             totalResults: data.totalResults,
    //             pageNumber: pageNumber - 1,
    //             loading: false,
    //             progress: 100,
    //         }))

    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;
    // }



    // handleNext = () => {

    //     let p = fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=6&apiKey=2be814ed1098453da31bc02d97d78a52&page=${pageNumber + 1}`);


    //     setState({
    //         loading: true,
    //         progress: 30,
    //     })

    //     p.then(response => response.json())
    //         .then(data => setState({
    //             articles: data.articles,
    //             totalResults: data.totalResults,
    //             pageNumber: pageNumber + 1,
    //             loading: false,
    //             progress: 100,
    //         }))

    //     document.body.scrollTop = 0;
    //     document.documentElement.scrollTop = 0;


    // }


    const hasMorePosts = async () => {

        try {
            setPageNumber(pageNumber+1);

            let p = await fetch(`https://newsapi.org/v2/top-headlines?country=${currentCountryName}&category=${props.category}&pageSize=6&apiKey=17acba01570847a69a036cc5a55e3b31&page=${pageNumber}`);

            console.log(pageNumber);

            const getData = await p.json();

            setArticles(articles.concat(getData.articles));
            // setPageNumber(pageNumber+1);
            setLoading(false);

            console.log(articles);
            console.log(pageNumber);
        } catch (err) {

        }

    }


    const date = new Date();
    const getTodaysDate = date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear();





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
            progress={progress}
            height={8}

        />



        <div id="headline" className="flex container mx-auto text-white items-center my-12">
            <div className="mx-auto gap-6 flex flex-row items-center w-auto px-44 py-3 bg-red-300 text-center justify-center font-bold bg-gradient-to-r from-red-300 via-red-500 to-red-300 rounded-full tracking-wide">
                <img src={props.categoryIcon} className="w-15 h-14"></img>
                <h1 className="text-5xl">TOP {props.headline} HEADLINES</h1>
            </div>
        </div>

        {loading && <Spinner />}


        <div id="displayDate" className="flex container mx-auto text-white items-center my-12">
            <h1 className="flex container mx-auto w-auto px-12 py-2 bg-red-300 text-3xl text-center justify-center font-bold bg-gradient-to-r from-red-200 via-red-500 to-red-200">Today: {getTodaysDate}</h1>
        </div>


        <InfiniteScroll
            next={hasMorePosts}
            dataLength={articles.length}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
        >

            <div id="setLayout" className="flex container mx-auto grid grid-cols-3 gap-x-4 my-20 gap-y-12">

                {!loading && articles.map((element) => {

                    return <NewsItem
                        getHours={element.publishedAt.slice(11, 13) > 12}
                        getMinutes={element.publishedAt.slice(14, 16)}
                        amPm={element.publishedAt.slice(11, 13) >= 12 ? `PM` : 'AM'}
                        key={element.url}
                        url={element.url}
                        urlToImage={element.urlToImage ? element.urlToImage : imagesArray[Math.floor(Math.random() * imagesArray.length)]}
                        title={element.title.slice(0, 60)}
                        description={element.description ? element.description.slice(0, 90) : "Click On The Title To Know More..."} />
                })}
            </div>
        </InfiniteScroll>






        <div id="fotterButtons" className="flex container mx-auto flex-row justify-between my-12">

            <button disabled={pageNumber <= 1} type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-20 py-2.5 text-center mr-2 mb-2">&laquo; Previous</button>



            <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Page {pageNumber}</button>

            <button disabled={pageNumber >= Math.ceil(totalResults / 6)} type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-20 py-2.5 text-center mr-2 mb-2">Next &raquo;</button>

        </div>

    </>
}
