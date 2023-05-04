import React from "react";
import style from './fetch.module.css'
function Fetch() {
    const [data, setData] = React.useState([]);
  
    React.useEffect(() => {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => setData(res.products))
    }, []);
      
    return (
      <div className="container row">
        {data.map((item, index) => (
            
            <div class="card mx-0.5 my-1 col-lg-4 col-md-6 col-sm-12" key={index} >
<img className={style.img}  src={item.images[1]} alt=""/>
              <div  className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p>price:{item.price}</p>
                <a href={item.images[3]}target="_blank" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          
          
        ))}
      </div>
    );
  }
  
  export default Fetch;
  