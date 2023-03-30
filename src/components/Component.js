import React from "react";

export default function Component(props) {
  const { data, dateChange, currentDate } = props;
  function dateChangeHandler(e) {
    console.log(e.target.value);
    dateChange(e.target.value);
  }
  if (!data) return <h3>Yükleniyor...</h3>;

  return (
    <div>
      <div className="App-container">
        <div className="rowsandcolumn">
          <div className="rows">
            <div className="first-row">
              <img className="foto" src={data.hdurl} width="40%"></img>
              <div className="row1yazi">
                <div>
                  ASTRONOMİ PİCTURE OF THE DAY-------DİSCOVER THE COSMOS
                </div>
              </div>
            </div>
            <div className="second-row">
              <img className="foto" src={data.hdurl} width="40%"></img>
              <div className="tarihveyazi">
                <div className="yazi">
                  <div className="ortadakiyazi">{data.title}</div>
                </div>

                <div className="tarih">
                  <div className="tarihdiv"></div>
                  {data.date}
                </div>
              </div>
            </div>
            <div className="third-row">
              <img className="foto" src={data.hdurl} width="40%"></img>
              <div className="r3yazi">
                Apod.nasa.gov&#169;-all rights reserved
              </div>
            </div>
          </div>
          <div className="sidecolumn">kolon</div>
        </div>
      </div>
      {/*<p>{data.date}</p>
      <label htmlFor="apodData">apodData :</label>
      <input
        onChange={(e) => dateChangeHandler(e)}
        type="date"
        value={currentDate}
        name="apodDate"
      ></input>
      <p>{data.explanation}</p>
      <p>{data.hdurl}</p>
      <p>{data.media_type}</p>
      <img src={data.hdurl} alt={data.title} width="500" height="500"></img>
      <p>{data.service_version}</p>
      <p></p>
      <p>{data.url}</p>*/}
    </div>
  );
}
