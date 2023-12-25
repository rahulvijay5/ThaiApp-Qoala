import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteForm = () => {
  const [recordId, setRecordId] = useState('');
//   const [entryDeleted, setEntryDeleted] = useState(false)
  const [notFillDetails, setnotFillDetails] = useState(false)

  const handleDeleteData = async () => {
    // setEntryDeleted(false);
    try {
      // Validate inputs
      if (!recordId) {
        console.error('Please fill in the Record ID.');
        setnotFillDetails(true)
        return;
    }

    const response = await axios.delete(`http://localhost:3001/api/ocr-record/${recordId}`);

      console.log(response.data.message);
    //   setEntryDeleted(true)
    } catch (error) {
      console.error('Error updating OCR data:', error.message);
    //   setEntryDeleted(false)
    }
  };

  return (
    <div className='my-6 flex flex-col justify-center items-center rounded-md border-2  p-3'>
      <h2 className='text-xl font-bold'>Delete Some Entry:</h2>
      <form className='mt-8 mb-2 rounded-md'>
        
        <div className='flex justify-between items-center'>
            <label htmlFor="recordId">Record ID:</label>
            <input
            type="text"
            id="recordId"
            className='border m-2 border-black p-1 text-black rounded-md'
            value={recordId}
            onChange={(e) => setRecordId(e.target.value)}
            />
        </div>

        {notFillDetails && (
            <div className="text-center text-md my-2 p-1 rounded-md bg-red-500/50">Fill the Record ID first.</div>
          )}

            {/* {setEntryDeleted && <p className="w-full text-center">Entry Deleted Successfully!</p>} */}
        <div className='flex justify-center'>
            <button  type="button" className="outline p-1 rounded-md mt-6 w-1/2 hover:bg-red-500 font-semibold hover:text-white" onClick={handleDeleteData}>
            Delete Entry
            </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteForm;
