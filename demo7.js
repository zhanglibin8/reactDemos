let Message = React.createClass({
    handleClick:function () {
        this.refs.txt.focus();
        alert('you get focus successful');
    },
    render(){
        return (
            <div>
                <input ref="txt" type="text"/>
                <button onClick={this.handleClick}>get input focus</button>
            </div>
        )
    }
});
ReactDOM.render(<Message/>,app);