import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ZipcodeAutoComplete = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://www.wsjwine.com/api/address/zipcode/12345",
      );
      setData(result.data.response);
    };
    fetchData();
  }, []);

  console.log(data);

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
            />
            <p>Enter ZIP to populate City and State</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ZipcodeAutoComplete;