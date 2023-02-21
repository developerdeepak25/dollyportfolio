import React from 'react'

const Education = () => {
    return (
        <>
            <div id="education" className="edu-section">
                {/* <h1>EDUCTION</h1> */}
                <div className="acadmics-container">
                    <div className="svg-container">
                        <img src="./elem.svg" alt="element1" />
                    </div>
                    <div className="acadmic-card-container">
                        {/* <div className="acadmic-card"> */}
                            <div className="card-content card-1">
                                <p className='ac-for'><span>B.COM</span> (75%)</p>
                                <p className="ac-from">Devi Ahaliya University Indore</p>
                                <p className="ac-year">2019-22</p>
                            </div>
                        {/* </div> */}
                        {/* <div className="acadmic-card"> */}
                            <div className="card-content card-2">
                                <p className='ac-for'><span>12th</span> (54%)</p>
                                <p className="ac-from">ST Vincent Palloti School Indore</p>
                                <p className="ac-year">2018-19</p>
                            </div>
                        {/* </div> */}
                        {/* <div className="acadmic-card"> */}
                            <div className="card-content card-3">
                                <p className='ac-for'><span>10th</span> (76%)</p>
                                <p className="ac-from">ST Vincent Palloti SChool Indore</p>
                                <p className="ac-year">2016-17</p>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education