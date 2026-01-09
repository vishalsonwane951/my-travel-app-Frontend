import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Stylesheet/MHeader.css';


function MaharashtraHeader() {
    return (
        <>
            <div className="c1">
                <nav className=" navbar navbar-expand-lg ">
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    </button> */}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li><Link className="navbar-brand" to="#">Maharashtra</Link></li>

                            <li className="nav-item active">
                                <Link className="nav-link" to="#">Hotels <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Things To Go</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link disabled" to="#">Restaurants</Link>
                            </li> <li className="nav-item">
                                <Link className="nav-link" to="#">Holiday Homes</Link></li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default MaharashtraHeader
