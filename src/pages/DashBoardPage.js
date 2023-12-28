import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { GET_ALL_PRODUCT } from "../services/productService";
import ProductModal from "../components/ProductModal";
import PreviewCard from "../components/PreviewCard";

const DashBoardPage = () => {
  const [showProductModal, setShowProductModal] = useState(false);
  const [products, setProduct] = useState([]);
  let refreshSatatus = false;
  const [filteredText, setFilteredText] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [itemID, setItemID] = useState();

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      width: "100px",
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Images",
      selector: (row) => {
        return (
          <img
            className="img-fluid rounded"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src =
                "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
            }}
            style={{ width: "100px" }}
            src={row.images[0]}
            alt="product Image"
          />
        );
      },
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Price",
      selector: (row) => "$" + row.price,
    },
  ];

  useEffect(() => {
    GET_ALL_PRODUCT()
      .then((reponse) => {
        let sortedProduct = reponse.sort((a, b) => b.id - a.id);

        setProduct(sortedProduct);
      })
      .catch((error) => console.log("errror is  : ", error));
  }, []);
  let filteredProduct = products.filter((product) =>
    product.title.toLowerCase().includes(filteredText.toLowerCase())
  );
  const handleCloseModal = () => {
    setShowProductModal(false);
  };
  const handleRowClicked = (row) => {
    setItemID(row.id);
    setSelectedProduct(row);
  };
  const handleProductDelete = (id) => {
    filteredProduct = filteredProduct.filter((product) => product.id !== id);

    setProduct(filteredProduct);
    setSelectedProduct(null);
  };
  return (
    <div>
      <div className="d-flex mt-5 container ">
        <ProductModal
          showProduct={showProductModal}
          handleCloseProductForm={handleCloseModal}
        />
        <div className="col-3 me-5">
          {
              selectedProduct?
              <>
                 <PreviewCard
            product={selectedProduct}
            onDelete={handleProductDelete}
          />
              </>
              : 
              <>
              <div className="d-grid p-5 mt-5 border rounded ">   
               <img style={{width: "200px"}} src="https://cdn3d.iconscout.com/3d/premium/thumb/forward-8851143-7155861.png" alt="Image" />
                <p className="text-center pt-3">Choose product to perform modification!!!</p>
              </div>

              </>

          }
         
        </div>
        <div className="product-table col-9 ">
          <DataTable
            className="table table-striped table-hover w-100 "
            subHeader={true}
            pointerOnHover={true}
            selectableRowsHighlight={true}
            highlightOnHover={true}
            pagination={true}
            columns={columns}
            responsive={true}
            paginationPerPage={5}
            data={products}
            subHeaderComponent={
              <div className="d-flex w-100 justify-content-between">
                <button
                  className="btn btn-primary me-5"
                  onClick={() => {
                    setShowProductModal(true);
                  }}
                >
                  {" "}
                  Add Product{" "}
                </button>
                <input
                  className="form-control w-25"
                  onChange={(e) => {
                    setFilteredText(e.target.value);
                  }}
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Products..."
                />
              </div>
            }
            data={filteredProduct}
            onRowClicked={handleRowClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
