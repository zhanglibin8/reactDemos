let Message = React.createClass({
    getInitialState(){
        return({opacity : 1})
    },
    componentDidMount:function () {
        let timer = setInterval(()=>{
            let opacity = this.state.opacity;
            opacity -=.05;
            if(opacity < .1){
                opacity = 1;
            }
            this.setState({
                opacity:opacity
            })
        },100)
    },
    render(){
        return (
            <div style={{background:`rgba(100,200,250,${this.state.opacity})`,textAlign:'center'}}>{this.props.text}</div>
        )
    }
});
ReactDOM.render(<Message text="Welcome To My Demo11!"/>,app);