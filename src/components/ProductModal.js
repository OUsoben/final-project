import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan,  } from '@fortawesome/free-solid-svg-icons'


const ProductModal = ({handleCloseProductForm,showProduct}) => {

  const handleProductClose = () => {
    handleCloseProductForm(false)
  }
  return (
    <Modal size="xl" show={showProduct} onHide={handleProductClose}

        >
            <Modal.Header closeButton={false}>
                <Modal.Title className="m-auto">
         
                        Create New Product
                  


                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <div className="img-side w-50">
                        <label htmlFor="file-input">
                            <img
                                id="preview-image"
                                className="img-fluid img-thumbnail"
                                width="400px "
                                src= "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1703030400&semt=ais"
                            
                                alt="Profile Picture"
                            />


                        </label>

                        {/* here we listing a smaller images  */}
                        <div className="more-images">
                            <div className="d-flex justify-content-center align-items-center">




                                <div className="d-flex justify-content-center align-items-center position-relative">
                                    <img

                                        className="img-fluid img-thumbnail"
                                        width="50px "
                                        src={"https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1703030400&semt=ais"}
                                        alt="Profile Picture"
                                    />
                                    <div

                                        className=" position-absolute"
                                        style={{ top: '-15px', right: '-5px' }}>


                                        <button className="btn btn-danger btn-sm   rounded-circle"  >
                                            <FontAwesomeIcon icon={faBan} />
                                        </button>
                                    </div>
                                </div>




                            </div>
                        </div>
                        {/* d-none */}
                        <input
                            className="form-control d-none "
                            type="file"
                            name=""
                     
                            id="file-input"
                            multiple
                        />
                    </div>

                    <div className="d-flex w-100   ms-3 flex-column">

                        <div className="d-flex mb-3   align-items-center justify-content-between">
                            <div class="form-floating  ">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="Jonh Doe"
               
                    


                                />
                                <label for="floatingInput" className="input-label">
                                    <div className="d-flex align-items-center">
                                 
                                        <span className="ms-2"> Produce Title  </span>
                                    </div>
                                </label>
                            </div>
                            <div class="form-floating  ">
                                <input
                                    type="number"
                                    class="form-control"
                                    id="floatingInput"
                                    placeholder="Jonh Doe"
                   
        


                                />
                                <label for="floatingInput" className="input-label">
                                    <div className="d-flex align-items-center">
                                 
                                        <span className="ms-2"> Produce Price  </span>
                                    </div>
                                </label>
                            </div>


                        </div>


                        <div class="form-floating mb-3  ">
                            <textarea
                                cols={3}
                                type="text"
                                class="form-control"
                                id="floatingInput"
                    
                                placeholder="name@example.com"
                                style={{ height: "170px" }}

                            ></textarea>
                            <label for="floatingInput" className="input-label">
                                <div className="d-flex align-items-center">
                                  
                                    <span className="ms-2"> Product Description </span>
                                </div>
                            </label>
                        </div>





                        <Button
                            variant= "warning"
                            className="w-100 mt-2 mb-5   "
                   

                        >         
            Create Product
 </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

  )
}

export default ProductModal