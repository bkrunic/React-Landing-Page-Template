import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="">
        <div className="section-title">
          <h2>Nase usluge</h2>
          <p>
            U nasem salonu nudimo sledece usluge:
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <h3>{d.price}</h3>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
