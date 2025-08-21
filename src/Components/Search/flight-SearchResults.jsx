const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results found.</p>;
  }

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <p>Flight: {result.flightNumber}</p>
            <p>From: {result.departureCity} To: {result.destinationCity}</p>
            <p>Departure: {result.departureDate}</p>
            <p>Arrival: {result.arrivalDate}</p>
            <p>Price: ${result.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
