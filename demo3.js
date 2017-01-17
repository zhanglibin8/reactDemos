let arr = [
    <h2>ReactTitle</h2>,
    <div>ReactContent</div>
];
ReactDOM.render(<ul>
    {
        arr.map((item,index)=>{
            return <li key={index}>{item}</li>
        })
    }
</ul>,app);

