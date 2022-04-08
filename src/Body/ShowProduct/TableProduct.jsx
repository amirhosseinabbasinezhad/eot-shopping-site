function TableProduct(props) {
    const table=props.table.map((obj,index)=>{
        return <tr key={index}><td>{obj.value}</td><th>{obj.key}</th></tr>
    })
    return ( <>
        <table>
            <tbody>
                {table}
            </tbody>
        </table>
    </> );
}

export default TableProduct;