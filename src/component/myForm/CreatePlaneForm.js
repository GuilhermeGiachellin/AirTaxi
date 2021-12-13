import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPlane } from '../../redux/slices/planesSlice';

const CreatePlaneForm = () => {
  const [model, setModel] = useState('');
  const [registration, setRegistration] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPlane({ model, registration }));
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
        <button type="submit">Add a new plane</button>
      </form>
    </div>
  );
};

export default CreatePlaneForm;
