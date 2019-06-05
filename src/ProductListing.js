import React, {useState, useEffect} from "react";
import axios from "axios";

const ProductListing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.wsjwine.com/api/offer/0033008",
      );
      setData(result.data.response.mainItems);
    };
    fetchData();
  }, []);

  return (
    <div id="prodList" className="row">
      <div id="offer-content1-desktop">
        <div className="form-section">
          <div className="section-header section-header-1">
            <h3>Which Case Would You Like?</h3>
          </div>
          <p>
            Whatever you choose, we’ll add in two bonus Cabs and two crystal glasses and you’ll have the complete package – worth over $250 – for ONLY $69.99 (plus $19.99 shipping &amp; applicable tax; please
            allow 5-10 days for delivery, depending on shipping state).
          </p>
          <div className="wine-select">
            {data.map((wine) =>
              <div className="offerChoice" key={wine.itemCode}>
                <input type="radio" className="radio" name="wineSelect" data-bom={wine.itemCode} value={wine.product.colourId} />
                <b>{wine.product.name}</b> + 2 BONUS Bottles &amp; Glasses <b>JUST {wine.product.skus[0].salePrice}</b>
                <a href="#" className="toggle-single-wine-modal" data-bom={wine.itemCode} data-title={wine.product.name}
                   data-toggle="modal" data-target="#single-wine-modal" >view wines</a>
              </div>)}
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductListing;







