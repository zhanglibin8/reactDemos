let Message = React.createClass({
    getInitialState(){
        return {value:'hello'}
    },
    handleChange(e){
        this.setState({value:e.target.value})
    },
    render(){
        return (
            <div>
                <div>{this.state.value}</div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </div>
        )
    }
});
ReactDOM.render(<Message/>,app);