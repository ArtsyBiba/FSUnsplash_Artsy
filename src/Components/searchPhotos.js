import React from "react";

export default function SearchPhotos() {
  return (
    <>
      <form className="form"> 
        <label className="label" htmlFor="query"> 
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "fancy cars" or "cute animals"`}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </>
  );
}