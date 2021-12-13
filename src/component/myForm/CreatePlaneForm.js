import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPlane } from '../../redux/slices/planesSlice';

const CreatePlaneForm = () => {
  const [model, setModel] = useState('');
  const [registration, setRegistration] = useState('');
  const [speed, setSpeed] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPlane({
      model, registration, speed, description, price,
    }));
    navigate('/main');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={model}
          placeholder="Model"
          onChange={(e) => setModel(e.target.value)}
          required
        />
        <input
          type="text"
          value={registration}
          placeholder="Registration"
          onChange={(e) => setRegistration(e.target.value)}
          required
        />
        <input
          type="text"
          value={speed}
          placeholder="Cruze Speed"
          onChange={(e) => setSpeed(e.target.value)}
          required
        />
        <input
          type="text"
          value={price}
          placeholder="Tour Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add a new plane</button>
      </form>
    </div>
  );
};

export default CreatePlaneForm;
