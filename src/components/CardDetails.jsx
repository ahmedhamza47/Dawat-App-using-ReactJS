import React from "react";
import { useState } from "react";
import { MdStarRate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
//import MenuListItem from "./MenuListItem";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { DELETE, ADD, REMOVE_INT } from "../redux/actions";
import Navbar from "./Navbar";
import { REMOVE_ITEM } from "../redux/type";
import "./CartDetails.css";
import Footer from "./Footer";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
const CardDetails = () => {
  const [data, setData] = useState([]);
  const getData = useSelector((state) => state.cartReducer.carts);
  // const params = useParams();
  // const compare = () => {
  //   let compareData = getData.filter((e) => {
  //     return e.id == params.id;
  //   });
  //   setData(compareData);
  // };
  // useEffect(() => {
  //   compare();
  // }, [params.id]);
  // console.log(getData);

  const dispatch = useDispatch();
  const increment = (e) => {
    dispatch(ADD(e));
  };
  const decrement = (item) => {
    dispatch(REMOVE_INT(item));
  };

  const navigate = useNavigate();
  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        dispatch(DELETE(id));
      }
    });
  };
  const navigateToHome = () => {
    navigate("/");
  };
  if (getData.length == 0) {
    const time0ut = setTimeout(navigateToHome, 2000);
  }

  //console.log(getData);
  const [totalPrice, setTotalPrice] = useState(0);
  const getTotalPrice = () => {
    let totalPrice = 0;
    getData.map((element, index) => {
      totalPrice =
        parseFloat(element.pricePerServing) * element.qty + totalPrice;
    });
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    getTotalPrice();
  }, [getTotalPrice]);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          <h1>My Cart</h1>
        </div>
      </div>
      <div className="container-cart ">
        {getData.map((item) => (
          <div className="row no-gutters mb-5" key={item.id}>
            <div className="col-md-3">
              <div className="image ">
                <img src={item.image} alt="" className="w-50" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="info">
                <h4> {item.title}</h4>
                <div className="rating my-2">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
                <div className="qty mt-2 mb-3">
                  <div className="count">
                    <span>Qty:</span>
                    <button
                      className="btn-count ml-3"
                      onClick={() => increment(item)}
                    >
                      {" "}
                      <AiOutlinePlus />
                    </button>

                    <span className="item-qty mx-3"> {item.qty}</span>
                    <button
                      className="btn-count"
                      onClick={
                        item.qty <= 1
                          ? () => deleteItem(item.id)
                          : () => decrement(item)
                      }
                    >
                      <AiOutlineMinus />
                    </button>
                  </div>
                </div>
                <h3>Price: ${item.pricePerServing}</h3>
              </div>
            </div>
            <div className="col-md-3 my-auto">
              {" "}
              <h5>
                <BsTrash
                  className="trash"
                  onClick={() => deleteItem(item.id)}
                />
              </h5>
            </div>
          </div>
        ))}

        <div className="total">
          <h1>Total : ${totalPrice.toFixed(2)}</h1>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default CardDetails;
