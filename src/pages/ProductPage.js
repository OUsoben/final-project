import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { GET_ALL_PRODUCT } from "../services/productService";
import "../styles/productCardStyle.css";
import PlaceHolderCard from "../components/PlaceHolderCard";
import ReactPaginate from "react-paginate";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const  [currentPages , setCurrentPages] = useState(0)
  const  [totalPages , setTotalPages] = useState(0)
  const itemsPerPage = 6

  const startIndex = currentPages * itemsPerPage // 0 * 8 = 0
  const endIndex =  startIndex + itemsPerPage   // 0 + 8 = 8

    const subset = products.slice(startIndex, endIndex)
    const handlePageChange =(selectedPage) =>{
      setCurrentPages(selectedPage.selected);
    }

  useEffect(() => {
    GET_ALL_PRODUCT()
      .then((response) => {

        let filteredProduct = response
        // here we are display data  we di
        // let filteredProducts = response.filter((p)=> p.category.name.toLowerCase() === "welcome")

        // get data from api and sort by bigger to smaller
        setProducts(filteredProduct.sort((a, b) => b.id - a.id));
        setTotalPages(
          Math.ceil(filteredProduct.length / itemsPerPage))

        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error is  : ", error);
      });
  }, []);

  // function to show the place holder card

  const placeHolderCards = (number) => {
    let placeholders = [];
    for (var i = 0; i < number; i++)
      placeholders.push(
        <div className="col-12">
          <PlaceHolderCard />
        </div>
      );
    return placeholders;
  };
  return (
    <div>
      <div className="container">
        <div className="row ">
          {isLoading ? (
            <>{placeHolderCards(3)}</>
          ) : (
            <>
              {products.length == 0 ? (
                <>
                  <div className=" text-center pt-5">
                    <div className="mt-5">
                      <img
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/empty-box-6219421-5102419.png?f=webp"
                        alt=""
                      />
                    </div>
                    <p className="fs-2 " style={{ fontFamily: "system-ui" }}>
                      There is no product to show{" "}
                    </p>
                    <p
                      style={{ fontFamily: "system-ui" }}
                      className="fs-5 pb-5 mb-5"
                    >
                      Since we use free api they sometime reset their data.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  {
                  subset.map((product) => {
                    return (
                      <div className="">
                        <ProductCard productData={product} />
                      </div>
                    );
                  })}
          
                     <div className="d-flex justify-content-center   py-3">
                      <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        pageCount={totalPages}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item '}
                        nextLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        activeClassName={'active '} />
                    </div>

                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
