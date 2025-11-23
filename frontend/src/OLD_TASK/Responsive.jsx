import React from 'react'

function Responsive() {
  return (
    <>
    <div className="container-fluid">
        <div className="row" style={{backgroundColor : "tomato"}}>
            <p>Row-1 </p>
        </div>

        <div className="row">
            <div className="col-4" style={{backgroundColor : "yellow"}}>Col 1</div>
            <div className="col-4" style={{backgroundColor : "green"}}>Col 2
                <h3 className="text-white">Block level Element</h3>
            </div>
            <div className="col-4" style={{backgroundColor : "skyblue"}}>Col 3</div>
            
        </div>


    </div>
    </>
  )
}

export default Responsive