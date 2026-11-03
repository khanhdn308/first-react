import { useState, useRef, useEffect } from 'react';

function AutoSearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // A mutable ref to keep track of the active timeout across renders
  const timeoutRef = useRef(null);

  // The actual search API function
  const performSearch = async (query) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://example.com{encodeURIComponent(query)}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Instantly update the input UI

    // 1. Clear any existing timer currently counting down
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 2. Start a fresh 3-second countdown
    timeoutRef.current = setTimeout(() => {
      performSearch(value); 
    }, 3000);
  };

  // The ONLY useEffect needed is a safety guard for when the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <input
        type="text"
        placeholder="Type to search (3s delay)..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{ width: '100%', padding: '8px', fontSize: '16px' }}
      />
      
      {loading && <p>Searching...</p>}

      <ul>
        {results.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AutoSearchBox;
