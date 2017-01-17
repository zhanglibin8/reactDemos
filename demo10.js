let Message = React.createClass({
    getInitialState(){
        return({opacity:1})
    },
    componentDidMount:function () {
        let timer = setInterval(()=>{
            let opacity = this.state.opacity;
            opacity -=.1;
            if(opacity <= 0.1){
                opacity = 1;
            }
            this.setState({opacity})
        },200)
    },
    render(){
        return(
            <div style={{opacity:this.state.opacity}}>Hello {this.props.name}</div>
        )
    }
});
ReactDOM.render(<Message name="Tom"/>,app);