const  Search = () => {

  const search = () => {
    
    const term = document.getElementById("search-term").value;
    window.location = "/search/?page=1&term="+String(term);

  }

  const onKeyPress = (event) => {
    if(event.key === 'Enter'){
      search();
    }
  }

  return (
    <div className="search-form">
      <input className="form-control text" onKeyPress={onKeyPress} type="text" placeholder="Search..." id="search-term" required></input>
      <button className="form-control btn" onClick={search}>Go!</button>
    </div>
  );
}

export default Search;
