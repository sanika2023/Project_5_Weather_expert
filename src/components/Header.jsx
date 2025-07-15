function Header({searchInput, setSearchInput, filter, setFilter})
{

    return (
    <div className="header">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter city..."
      />

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Temps</option>
        <option value="cold">Below 15°C</option>
        <option value="warm">15°C - 25°C</option>
        <option value="hot">Above 25°C</option>
      </select>
    </div>
  );

}

export default Header