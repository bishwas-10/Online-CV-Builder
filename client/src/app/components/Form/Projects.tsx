import { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const YourComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
     const datePicker= flatpickr(inputRef.current, {
        dateFormat: 'Y-m-d', // Set your desired date format
        onClose: function(selectedDates, dateStr, instance) {
          // Handle the date change event here if needed
          console.log(dateStr);
        }
      });return () => {
      // Destroy Flatpickr instance on unmount to prevent memory leaks
      datePicker.destroy();
    };
    }
    
    
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        id="startDate"
        className="px-4 py-2 rounded outline-none bg-gray-200 focus:border-b-4 focus:border-b-blue-500"
        placeholder="Select date"
      />
    </div>
  );
};

export default YourComponent;
