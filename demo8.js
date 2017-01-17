let Message = React.createClass({
    getInitialState(){
        return {hart:false}
    },
    handleClick(){
        this.setState({hart:!this.state.hart})
    },
    render(){
        return (
            <button onClick={this.handleClick}>{this.state.hart?'开心':'不开心'}</button>
        )
    }
});
ReactDOM.render(<Message/>,app);