import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import PropTypes from 'prop-types'
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defultProps={
    country:'in',
    pageSize: 9,
    category:'general',

  }
  static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }

  constructor(props) {
    super(props); 
    this.state = {
      articles:[{}],
      loading:true,
      page:1, 
      totalResults :1 ,
      
    };
   document.title = `iNews - ${this.props.category.slice(0,1).toUpperCase() + this.props.category.slice(1)}`; 
  }

  async updateNews(){
    this.props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.keyValue}
    &page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState.loading=true;
    let data= await fetch(url);
    this.props.setProgress(40); 
    let parseData= await data.json();
    this.props.setProgress(70);
    console.log(parseData);
    this.setState({articles:parseData.articles,totalResults:parseData.totalResults,loading:false,page:this.state.page+1})
    this.props.setProgress(100);
  }
  async componentDidMount(){
    this.updateNews();
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71a08a4410b14242b2fc5b18d69f7c40&page=1&pageSize=${this.props.pageSize}`;
    // this.setState.loading=true;
    // let data= await fetch(url);
    // let parseData= await data.json();
    // this.setState({articles:parseData.articles,totalResults:parseData.totalResults,loading:false})
  }

  // handlePrevClick =async()=>{

  //  this.setState({
  //   page:this.state.page-1
  //  })
  //  this.updateNews();
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71a08a4410b14242b2fc5b18d69f7c40&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading:true});
  //   // let data= await fetch(url);
  //   // let parseData= await data.json();
    
  //   // this.setState({
  //   //   page:this.state.page-1,
  //   //   articles:parseData.articles,
  //   //   loading:false,
  //   // });

  // }
//   handleNextClick =async()=>{
//     this.setState({
//       page:this.state.page+1
//      })
//     this.updateNews();
//   //   if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

//   //   }
//   //  else{
//   //       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71a08a4410b14242b2fc5b18d69f7c40&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
//   //       this.setState({loading:true});
//   //       let data= await fetch(url);
//   //       let parseData= await data.json();
//   //       // console.log(parseData);
//   //       this.setState({
//   //         page:this.state.page+1,
//   //         articles:parseData.articles,
//   //         loading:false,
//   //       });
        
//   //       console.log(this.state.page);
//   //       console.log(Math.ceil(this.state.totalResults / this.props.pageSize));
//   // }
// }
  fetchMoreData = async () => {
   

    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.keyValue}
    &page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({ page : this.state.page + 1 })
    let data= await fetch(url); 
    let parseData= await data.json();
    console.log(parseData);
    this.setState({
      articles:this.state.articles.concat(parseData.articles),
      totalResults:parseData.totalResults,
      })
  };


  render() {
    return (
      <>
        
          <div className="text-center mb-5">
          <h1>iNews - Top {this.props.category.slice(0,1).toUpperCase() + this.props.category.slice(1)} HeadLines</h1>
          </div>
          <div className="text-center"> {this.state.loading && <Spinner/>} </div>

            <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!== this.state.totalResults }
            loader={<Spinner/>}
          >
            <div className="container">
          <div className="row my-3">
            {this.state.articles.map((element) => {
             return<div key={element.urlToImage} className="col-md-4" ><NewsComponent title={element.title} description={element.description} imageUrl={element.urlToImage}  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source}/></div>
            })};
          </div>
          </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
          </div> */}
        
      </>
    );
  }
}

export default News;
 