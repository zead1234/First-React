import React from "react";
import style from './fetch.module.css'
function Fetch() {

    const [data, setData] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const addToCart = (item) => {
      setCartItems([...cartItems, item]);
    };
  
  
  

  
    React.useEffect(() => {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => setData(res.products))
    }, []);
      
    return (
     <div  className="container">
       <div className="row">
        {data.map((item, index) => (
          
            
            <div className="card  my-2 col-lg-4 col-md-6 col-sm-12"  key={index} >
<img className={style.img}  src={item.images[0]} alt=""/>
              <div  className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p>price:{item.price}</p>
                {/* <a onClick={click} href={item.images[3]} target="_blank" className="btn btn-primary">Go somewhere</a> */}
                <button onClick={() => addToCart(item)} className="btn btn-primary" >Add to cart</button>
              </div>
            </div>
          
          
        ))}
        <div className=" container" >
           <div className="row bg-dark text-light">
         {cartItems.map((item, index) => (
          <div>
            
            <p>_{index}_ &nbsp;Item Name : {item.title} &nbsp; Price : {item.price}</p>
            <button onClick={() => setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))} className="btn btn-danger col-md-3 my-1">Delete</button>
          
          </div>  
        ))}

        </div>
          </div>
      </div>
     </div>
    );
  }
  
  export default Fetch;
  