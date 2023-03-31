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
                  ASTRONOMY PİCTURE OF THE DAY
                  <hr
                    style={{
                      color: "#000000",
                      backgroundColor: "#000000",
                      height: 0.5,
                      borderColor: "#000000",
                    }}
                  />
                  DİSCOVER THE COSMOS
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
                  <label htmlFor="apodData">Choose Date:</label>
                  <input
                    onChange={(e) => dateChangeHandler(e)}
                    type="date"
                    value={currentDate}
                    name="apodDate"
                  ></input>
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
          <div className="sidecolumn">
            <div className="isim">
              <div className="isim2"> Doğan Yangöz</div>
            </div>
            <div className="social">
              <div className="social2">
                <a href="">Facebook</a>
                <a href="">Twitter</a>
                <a
                  href="https://www.instagram.com/doganyangoz/"
                  target="_blank"
                >
                  İnstagram
                </a>
              </div>
            </div>
          </div>
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
