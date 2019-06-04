import React from 'react';

const ProductListing = (props) => {

  return (
    <div className='container'>
      <div id="offer-content1-desktop" className="hidden-xs">
        <div className="form-section">
          <div className="section-header section-header-1">
            <h3>Which Case Would You Like?</h3>
          </div>

          <p>
            Whatever you choose, we’ll add in two bonus Cabs and two crystal glasses and you’ll have the complete package – worth over $250 – for ONLY $69.99 (plus $19.99 shipping &amp; applicable tax; please
            allow 5-10 days for delivery, depending on shipping state).
          </p>

          <div className="wine-select">
            <label className="">
              <input type="radio" className="radio" name="wineSelect" checked="" data-bom="A07616" value="all-reds" />
                <b>Top 12 Reds</b> + 2 BONUS Bottles &amp; Glasses <b>JUST $69.99</b>
                <a href="#" className="toggle-single-wine-modal" data-bom="A07616" data-title="Top 12 Reds"
                   data-toggle="modal" data-target="#single-wine-modal" >view wines</a>
            </label>

            <label className="">
              <input type="radio" className="radio" name="wineSelect" data-bom="A07617" value="all-whites" />
                <b>Top 12 Whites</b> + 2 BONUS Bottles &amp; Glasses <b>JUST $69.99</b>
                <a href="#" className="toggle-single-wine-modal" data-bom="A07617" data-title="Top 12 Whites"
                   data-toggle="modal" data-target="#single-wine-modal">view wines</a>
            </label>

            <label className="">
              <input type="radio" className="radio" name="wineSelect" data-bom="A07618" value="mixed" />
                <b>Top 12 Mix</b> + 2 BONUS Bottles &amp; Glasses <b>JUST $69.99</b>
                <a href="#" className="toggle-single-wine-modal" data-bom="A07618" data-title="Top 12 Mix"
                   data-toggle="modal" data-target="#single-wine-modal" >view wines</a>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductListing;