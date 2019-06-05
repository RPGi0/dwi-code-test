import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ZipcodeAutoComplete = () => {
  const [data, setData] = useState({});
  const [zip, setZip] = useState('');
  const [fetched, setFetched] = useState({});

  const fetchData = async (zipCode) => {
    if (fetched[zipCode]) setData(fetched[zipCode]);
    else {
      const result = await axios(
        `https://www.wsjwine.com/api/address/zipcode/${zipCode}`
      );
      const newZips = Object.assign({}, fetched);
      newZips[zipCode] = result.data.response;
      setFetched(newZips);
      setData(result.data.response);
    }
  };

  const zipText = () => {
    let text = [<p>Enter ZIP to populate City and State</p>];
    let bonusMessage = <p>Residents of Connecticut are eligible for a Special Offer</p>;
    if (zip.length === 5 && data.hasOwnProperty('stateCode')) {
      text = [<p>{data.city}, {data.stateName}</p>];
      if (data.stateCode === 'CT') text.push(bonusMessage);
    }
    return text;
  };

  const handleZipInput = (zipInput) => {
    setZip(zipInput);
    if (zipInput.length === 5) fetchData(zipInput);
  };

  return (
    <div id="zipFinder" className="container">
      <div className="row form-group">
        <form action="" method="get" >
          <div>
            <label><span>*</span> ZIP</label>
            <input
              id="zip"
              name="zip"
              type="text"
              pattern="[0-9]*"
              maxLength="5"
              value={zip}
              onChange={e => handleZipInput(e.target.value)}
            />
            {zipText()}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ZipcodeAutoComplete;