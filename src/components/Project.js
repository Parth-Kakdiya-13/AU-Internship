import React from 'react'
import mp1 from '../assets/mp1.jpg'
import face from '../assets/face.jpg'
export const Project = () => {
  return (
    <div className='container ' style={{"display":"flex"}}>
            <div className="card mb-3" style={{"max-width": "540px","margin":"10px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={face} className="img-fluid rounded-start" alt="..."/>
                    </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            </div>
            <div className="card mb-3" style={{"max-width": "540px","margin":"10px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={face} className="img-fluid rounded-start" alt="..."/>
                    </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            </div>
    </div>
  )
}
