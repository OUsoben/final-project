import React, {  useState } from "react";
import { DELETE_PRODUCT_BY_ID } from "../services/productService";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

const PreviewCard = ({ product, onDelete }) => {
  const [status, setStatus] = useState(false);

  const [isLaoding, setISLaoding] = useState(false);


  const handleDeleteProduct = () => {
    setISLaoding(true);
    DELETE_PRODUCT_BY_ID(product.id)
      .then((response) => {
        toast.success(" Successfully Deleted ");
        setStatus(!status);
        onDelete(status);
        setISLaoding(false);
      })
      .catch((error) => {
        toast.error("Failed to Delete !! ");
        console.log("Error Delete : ", error);
        setISLaoding(false)
      });
  };
  return (
    <div>
      <div>
        <img
          className="img-fluid"
          src={
            product?.images?.length > 0
              ? product.images[0]
              : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          }
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src =
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
          }}
          alt=""
        />
        <h2 className="pt-3">{product.title}</h2>
        <hr />
        <p>{product.description}</p>

        <div>
          <button className="btn btn-warning me-3">update</button>
          <button className="btn btn-danger" onClick={handleDeleteProduct}>
           {
            isLaoding ? <> <ThreeDots
              visible={true}
              height="24  "
              width="50"
              color="white"
              radius="9"
              ariaLabel="three-dots-loading"
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
