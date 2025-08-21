// components/PassengerClassInput.js
import { useState } from 'react';

const PassengerClassInput = ({ value, onChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [passengerData, setPassengerData] = useState(value || {
    adultPassengers: 1,
    childPassengers: 0,
    infantPassengers: 0,
    travelClass: 'economy',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassengerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onChange(passengerData);
    setShowModal(false);
  };

  return (
    <div>
      <input
        type="text"
        readOnly
        value={`${passengerData.adultPassengers} Adults, ${passengerData.childPassengers} Children, ${passengerData.infantPassengers} Infants, Class: ${passengerData.travelClass}`}
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Select Passengers and Class</h3>
            <div>
              <label>Adults:</label>
              <input
                type="number"
                name="adultPassengers"
                value={passengerData.adultPassengers}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
            <div>
              <label>Children:</label>
              <input
                type="number"
                name="childPassengers"
                value={passengerData.childPassengers}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div>
              <label>Infants:</label>
              <input
                type="number"
                name="infantPassengers"
                value={passengerData.infantPassengers}
                onChange={handleChange}
                min="0"
              />
            </div>
            <div>
              <label>Class:</label>
              <select
                name="travelClass"
                value={passengerData.travelClass}
                onChange={handleChange}
                required
              >
                <option value="economy">Economy</option>
                <option value="business">Business</option>
                <option value="firstclass">First Class</option>
              </select>
            </div>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerClassInput;

