import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { CREATE_PRODUCT, UPDATE_PRODUCT_BY_ID } from "../services/productService";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-toastify";
import { UPLOAD_FILE } from "../services/fileService";

const ProductModal = ({ handleCloseProductForm, showProduct ,  updatedProduct }) => {
  const [isLaoding, setIsLoading] = useState(false);
  const [title, setTitle] = useState(updatedProduct ? updatedProduct.title : "");
  const [description, setDescription] = useState(updatedProduct ? updatedProduct.description : "");
  const [price, setPrices] = useState(updatedProduct ? updatedProduct.price :  0 );
  const [categoryId, setCategoryId] = useState(updatedProduct ? updatedProduct.category.id : 4);
  const [images , setImages] = useState(updatedProduct ? updatedProduct.images[0] : []);
  const [selectedFile, setSelectedFiles] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);

  useEffect(() => {

    setTitle(updatedProduct ? updatedProduct.title : "")
    setDescription(updatedProduct ? updatedProduct.description : "")
    setPrices(updatedProduct ? updatedProduct.price : 0)
    setCategoryId(updatedProduct ? updatedProduct.category.id : 4)
    setImages(updatedProduct ? updatedProduct.images : [])
    setSelectedImages(updatedProduct ? updatedProduct.images[0] : "https://cdn3d.iconscout.com/3d/premium/thumb/image-6073772-4996992.png")

}, [updatedProduct])
 
  let product = {
    title,
    price,
    description,
    categoryId,
    images: [
        "https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1"
    ]
}


  console.log("product: " , product)
  const handleProductClose = () => {
    handleCloseProductForm(false);  
  };
  const handleCreateProduct = () => {
    setIsLoading(true);
        if(updatedProduct){
           if(selectedFile){
              let file =new FormData();
              file.append("file", selectedFile)
              UPLOAD_FILE(file).then(
                response => {
                  // setImages([])
                  // setImages(images.push(response.response));
                  product.images = []
                  product.images.push(response.location)

                  UPDATE_PRODUCT_BY_ID(updatedProduct.id, product)
                  .then(
                      response => {
                          console.log("UPDated REsponse ", response)
                          toast.success("Updated Product Successfully !")
                          setIsLoading(false)
                      }
                  ).catch(error => {
      
                      console.log("Error UPdated Product ", error)
                      toast.error("Failed to update product !")
                      setIsLoading(false)
                  }) 
                }
              )
                }    else{ 
         
           product.images = updatedProduct.images
            UPDATE_PRODUCT_BY_ID(updatedProduct.id, product)
            .then(
                response => {
                    console.log("UPDated REsponse ", response)
                    toast.success("Updated Product Successfully !")
                    setIsLoading(false)
                }
            ).catch(error => {

                console.log("Error UPdated Product ", error)
                toast.error("Failed to update product !")
                setIsLoading(false)
            })  }
            }  else{
          if (selectedFile) {
            // reupload the new 
            
            let file = new FormData()
            file.append("file", selectedFile)
      
                UPLOAD_FILE(file).then(
                    response => {
                        console.log("REsponsen UPdated Upload file : ", response.location)
                        // setImages([])
                        // setImages(images.push(response.location))
                        product.images = []
                        product.images.push(response.location)
                        product.images = images 
                        CREATE_PRODUCT(product)
                        .then(
                            response => {
                           
                                toast.success("Updated Product Successfully !")
                                setIsLoading(false)
                            }
                        ).catch(error => {
                            toast.error("Failed to update product !")
                            setIsLoading(false)
                        })
                    }
                )
                  }
      else{
        CREATE_PRODUCT(product).then(
          response => {
              
              toast.success("Create Product Successfully!")
              setIsLoading(false)
          }
      ).catch(error => {
          console.log("Failed to create product : ", error)
          setIsLoading(false)
          toast.error("Failed to create product!")
      })
      
          }
        }

  
   
  };
  const handleStateChange = (e) =>{
    setSelectedFiles(e.target.files[0])
    let imageUrl = URL.createObjectURL(e.target.files[0])
    setSelectedImages(imageUrl)
  }
  return (
    <Modal size="xl" show={showProduct} onHide={handleProductClose}>
      <Modal.Header closeButton={false}>
        <Modal.Title className="m-auto">
            {
              updatedProduct ? 
           
              "Update Product Information"
            
              :
              "Create New Product"
            }

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
                src= 
                { 
                  selectedImages?
                  selectedImages :
                  "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1703030400&semt=ais"
                }
                
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
                    src={
                      selectedImages?
                      selectedImages :
                      "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1703030400&semt=ais"
                    }
                    alt="Profile Picture"
                  />
                  <div
                    className=" position-absolute"
                    style={{ top: "-15px", right: "-5px" }}
                  >
                    <button className="btn btn-danger btn-sm   rounded-circle">
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
         
              onChange={handleStateChange}
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label for="floatingInput" className="input-label">
                  <div className="d-flex align-items-center">
                    <span className="ms-2"> Produce Title </span>
                  </div>
                </label>
              </div>
              <div class="form-floating  ">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Jonh Doe"
                  value={price}
                  onChange={(e) => setPrices(e.target.value)}
                />
                <label for="floatingInput" className="input-label">
                  <div className="d-flex align-items-center">
                    <span className="ms-2"> Produce Price </span>
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
              variant="warning"
              className="w-100 mt-2 mb-5 "
              onClick={handleCreateProduct}
            >
              {isLaoding ? (
                <>
                  <RotatingLines
                    visible={true}
                    height="20"
                    width="25"
                    color="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </>
              ) :
              (
              <>  {
                updatedProduct  ? 
                      "Updated Product"
                  : 
                  "Create Product"
                }
              </>
               

             
              )}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
