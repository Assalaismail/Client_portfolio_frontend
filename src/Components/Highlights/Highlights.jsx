import React from 'react'
import "./Highlights.css"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom";


function Highlights() {

  const [alldata, setAllData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleClose = (e) => {
    e.stopPropagation();
    setShowModal(false);
  };

  const handleOpen = (imgSrc) => {
    setModalImage(imgSrc);
    setShowModal(true);
  };

  const apiURL = 'https://client-backend.onrender.com/info';


  const fetchallData = async () => {
    try {
      const response = await axios.get(apiURL);
      console.log(response.data);
      setAllData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {

    fetchallData();

  }, []);

  return (
    <div>
      <div className="Highlights">
        <p className="title">Highlights</p>
        <p className='below'>Below are some Highlights and Milestones that I achieved during my career as a Security Researcher and Bug Bounty Hunter.</p>

<p className='below'>(Click on the Image in order to view it clearly)</p>
        <div className="containerHighlights11">

        {alldata.filter(info => info.info_category[0] === 'Highlights').map((info, index) => (
 <div key={info._id}>
   <div className="row" key={index}>
        <div className="box-img">
          <img className="box-img" src={`https://client-backend.onrender.com/${info.info_image}`} alt="img"
          onClick={() => handleOpen(`https://client-backend.onrender.com/${info.info_image}`)}/>
{showModal && (
              <div className="modal-container" onClick={handleClose}>
                <div className="modal-content">
                  <img src={modalImage} alt="Modal Image" />
                </div>
              </div>
            )}
          </div>
          <div className="top"></div>
        {/* <div className="contentC">
          <p>{info.info_description}</p>
        </div> */}
        <br/>  <br/>
        
    </div>
    
</div>
))}


 </div>
    {/* <div><p className='dotted'></p> </div> */}
  </div>

      </div>
  )
}

export default Highlights