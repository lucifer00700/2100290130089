import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Even = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [average, setAverage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://20.244.56.144/test/even', {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjE5MTQwLCJpYXQiOjE3MTcyMTg4NDAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNhZWZkMWU1LTlmYjctNDVlNi1iMTk5LTBhOGRiNjliYmQyZiIsInN1YiI6ImtzaGl0aWouMjEyNWl0MTEyMkBraWV0LmVkdSJ9LCJjb21wYW55TmFtZSI6ImNoaXRyYW5zaCIsImNsaWVudElEIjoiM2FlZmQxZTUtOWZiNy00NWU2LWIxOTktMGE4ZGI2OWJiZDJmIiwiY2xpZW50U2VjcmV0IjoiVlNlb3pGbEVqZHFKYXpuQSIsIm93bmVyTmFtZSI6IktzaGl0aWogQ2hpdHJhbnNoIiwib3duZXJFbWFpbCI6ImtzaGl0aWouMjEyNWl0MTEyMkBraWV0LmVkdSIsInJvbGxObyI6IjIxMDAyOTAxMzAwODkifQ.imZnYPwpppNjRARjjfSRbo6X77OKLBEK-TJFMnOjI2Q'
          }
        });
        setData(response.data);
        
        // Calculate the average of the numbers
        const numbers = response.data;
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const avg = sum / numbers.length;
        setAverage(avg);

      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Even Numbers</h1>
      {error && <p>Error: {error}</p>}
      {data ? (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <p>Average: {average}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Even;
