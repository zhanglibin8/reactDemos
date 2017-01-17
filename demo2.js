let arr = ['刘备','关羽','张飞'];
ReactDOM.render(<ul>
    {
        arr.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
    }
</ul>,app);
