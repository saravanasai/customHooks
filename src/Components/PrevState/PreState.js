import React, { useState } from "react";

const PreState = () => {


    const [state,setState]=useState({'currentCount':0,'totalClicks':0})
   
     const handleClick=()=>
     {
         
        setState(prevState => ({...prevState,currentCount:prevState.currentCount+1,totalClicks:prevState.totalClicks+1}));

     }

     const handleClickDecrease=()=>
     {
         
        setState(prevState => ({...prevState,currentCount:prevState.currentCount-1,totalClicks:prevState.totalClicks+1}));

     }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#">Action 1</a>
                                <a className="dropdown-item" href="#">Action 2</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="conatiner">
                <div className="card mt-5">
                    <div className="row">
                        <div className="col-md-4 offset-md-2">
                            <div className="card p-5">
                            <h3>Current Count</h3>
                                 {state.currentCount}
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-success" onClick={handleClick} >Increase</button>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-danger" onClick={handleClickDecrease} >Decrease</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-5">
                                <h3>Total clicks</h3>
                             {state.totalClicks}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default PreState;