let title = 'hello';
let Message = React.createClass({
    propType:{
        title:React.PropTypes.string.isReacted
    },
    render(){
        return <div>{this.props.title}</div>
    }
});
ReactDOM.render(<Message title={title}/>,app);
