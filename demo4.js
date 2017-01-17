let Message = React.createClass({
    render(){
        return <div>hello,{this.props.name}</div>
    }
});
ReactDOM.render(<Message name="Tom"/>,app);
