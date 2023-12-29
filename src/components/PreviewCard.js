import React, {  useState } from "react";
import { DELETE_PRODUCT_BY_ID } from "../services/productService";
import { toast } from "react-toastify";
import { Oval, RotatingLines, ThreeDots } from "react-loader-spinner";
import { handleLongText } from "../utils/helper";
import "../styles/previewCardStyle.css"

const PreviewCard = ({ product, onDelete ,onUpdate }) => {

  const handleUpdateProduct = () =>{
     onUpdate(product);
  }
  const [isLaoding, setIsLaoding] = useState(false);

  const handleDeleteProduct = () => {
    setIsLaoding(true);
    DELETE_PRODUCT_BY_ID(product.id)
      .then((response) => {
        toast.success(" Successfully Deleted ");
        setIsLaoding(false);
        onDelete(product.id)
      })
      .catch((error) => {
        toast.error("Failed to Delete !! ");
        console.log("Error Delete : ", error);
        setIsLaoding(false)
      });
  };
  return (
    <div>
      <div className="pre-border rounded mt-5 p-4" >


        <img
          style={{width:"300px"}}
          className="img-fluid"
          src={
            product?.images?.length > 0
              ? product.images[0]
              : <>
              <div className="d-grid p-5 mt-5 pre-border rounded ">   
               <img style={{width: "220px"}} src="https://cdn3d.iconscout.com/3d/premium/thumb/web-alert-6592068-5487955.png" alt="Image" />
                <p className="text-center pt-3">Choose product to perform modification!!!</p>
              </div>
              </>
          }
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
          }}
          alt=""
        />
        <h2 className="pt-3">
            { 
            handleLongText( product.title,10)
            }      </h2>
        <hr />
        <p>{
        handleLongText(product.description,50) 
      }</p>

        <div>
          <button className="btn btn-danger me-3"
            onClick={handleUpdateProduct}
          >update</button>
          <button className="btn  btn-warning" onClick={handleDeleteProduct}>
           {
            isLaoding ? <>   <RotatingLines
            visible={true}
            height="20"
            width="20"
            color="white"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
            </>
            : "Delete"
           }
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
