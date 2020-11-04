import React from "react";

const Sort = ({handleSort, sort}) => {
  return (
    <div>
    <form>
      <label style={{color: "blue", fontSize: "20px"}}>Sort Alphabetically By:</label>
      <br></br>
      Category<input type="radio" onClick={(e) => handleSort(e.target.value)} name="sort" value='category' clicked={sort === 'category' ? 'true' : 'false'} />
      <label>Description</label>
      <input type="radio" onClick={(e) => handleSort(e.target.value)} name="sort" value='description' clicked={sort === 'description' ? 'true' : 'false'} />
    </form>
  </div>  
  );
};

export default Sort;