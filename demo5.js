//es6
let Message = React.createClass({
    render(){
        return (
            <ol>
                {
                    this.props.children.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ol>
        )
    }
});
ReactDOM.render(<Message>
    <span>赵云</span>
    <span>马超</span>
</Message>,app);
