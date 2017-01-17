let Message = React.createClass({
    getInitialState(){
        return {
            data:null,
            error:null,
            loading:true
        }
    },
    componentDidMount(){

        this.props.promise.then(
            data => {this.setState({loading:false, data:data})},
            error => {this.setState({loading:false, error:error})}
        )
    },
    render(){
        if(this.state.loading){
            return <span>Loading...</span>
        }else if(this.state.error){
            return <span>{this.state.error.massage}</span>
        }else{

        }
        return(
            <main>
                <h1>More Javascript Project In Github.</h1>
                <ol>
                    {
                        this.state.data.items.map((item, index)=>{
                            return <li key={index}>
                                <a href={item.html_url}>{item.name}</a> (starts:{item.stargazers_count}; focks:{item.forks_count}) <i>type:{item.language}</i><br/>
                                <p>{item.description}</p>
                            </li>
                        })
                    }
                </ol>
            </main>
        )
    }
});
ReactDOM.render(<Message promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}/>,app);