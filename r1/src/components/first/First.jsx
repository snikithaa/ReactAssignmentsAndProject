
function First(){
    // state
    let emp=[{eid:1,name:'ramu',age:23},{eid:2,name:'srinivas',age:21},{eid:3,name:'ravi',age:20},{eid:4,name:'manish',age:25}];
    return(
       <div className="table-responsive text-center">
         <table className="table table-bordered mx-auto mt-5 w-50 table-info table-sm  table-hover">
            <thead>
                <tr>
                    <th>Eid</th>
                    <th>Name</th>
                    <th>age</th>
                </tr>
            </thead>
            <tbody>
                {
                    emp.map((obj)=>
                          <tr key={obj.eid}>
                            <td>{obj.eid}</td>
                            <td>{obj.name}</td>
                            <td>{obj.age}</td>
                          </tr>
                    )
                }
            </tbody>
        </table>
       </div>
        )
}
export default First;