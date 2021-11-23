import React, { useState } from "react";
import { connect } from "react-redux";
import { uploadProduct } from "../../Redux/product/productActions";
import { uploadImages } from "../../Utility/Utility";
import Cart from "../../Components/Cart/Cart";
import Header from "./../../Components/Header/Header";
import Paragraph from "./../../Components/Paragraph/Paragraph";
import Button from "./../../Components/Button/Button";
import ProductCard from "./../../Components/ProductCard/ProductCard";
import { openModal } from "./../../Redux/modal/modalActions";

const Test = ({ uploadProduct, uploadImages, openModal }) => {
  // var [category, setcategory] = useState("")
  // var [title, settitle] = useState("")
  // var [cost, setcost] = useState("")
  // var [description, setdescription] = useState("")
  // var [quantity, setquantity] = useState("")
  // var [CoverPhoto, setCoverPhoto] = useState(null)

  // var handleSubmit = (e) => {
  //     e.preventDefault()
  //     var productObj = {
  //         category,
  //         title,
  //         cost,
  //         description,
  //         quantity,
  //         CoverPhoto,
  //     }
  //         // uploadImages(productObj)
  //     uploadProduct(productObj)
  // }
  return (
    /* 1em = 10px  */
    <div style={{ fontSize: "62.5%" }}>
      <h1>Test page</h1>
      {/* <form onSubmit={handleSubmit}>
                <input onChange={(e) => setcategory(e.target.value)} type="text" value={category} placeholder="category"/> <br/>
                <input onChange={(e) => settitle(e.target.value)} type="text" value={title} placeholder="title"/><br/>
                <textarea onChange={(e) => setdescription(e.target.value)}  value={description} cols="30" rows="10" placeholder="Description"></textarea><br/>
                <input onChange={(e) => setcost(e.target.value)} type="text" value={cost} placeholder="cost"/><br/>
                <input onChange={(e) => setquantity(e.target.value)} type="text" value={quantity} placeholder="quantity"/><br/>
                <input onChange={(e) => setCoverPhoto(e.target.files[0])}  type="file"  placeholder="cover photo"/>
                <button>ADD PRODUCT</button>
            </form> */}
      {/* ------------------------------------------------------------------- */}
      {/* <Cart/> */}
      {/* <Header fontWeight="bold" fontSize={32}>This is  my Header</Header>
            <Header fontWeight="regular" fontSize={16}>This is  my 2nd  Header</Header>
            <Header fontWeight="regular" fontSize={16} color="darkgreen">This is  my 2nd  Header</Header>
            
            <Paragraph fontWeight="bold" fontSize={32}>This is  my Paragraph</Paragraph>
            <Paragraph fontWeight="regular" fontSize={16}>This is  my 2nd  Paragraph</Paragraph>
            <Paragraph fontWeight="regular" fontSize={16} color="darkgreen">This is  my 2nd  Paragraph</Paragraph>

            <Button  fontWeight="semi-bold" >Click Me! </Button> */}

      {/* <ProductCard /> */}
      <Button
        onClick={() =>
          openModal({ modalType: "testModal", modalProps: { number: 2 } })
        }
      >
        open test modal
      </Button>
      <Button
        onClick={() =>
          openModal({ modalType: "errorModal", modalProps: {error: "ops! </br> something went wrong "} })
        }
      >
        open error modal
      </Button>
      <Button
        onClick={() =>
          openModal({ modalType: "addressFormModal"  })
        }
      >
        open Address modal
      </Button>
    </div>
  );
};
var actions = {
  uploadProduct,
  uploadImages,
  openModal,
};
export default connect(null, actions)(Test);
