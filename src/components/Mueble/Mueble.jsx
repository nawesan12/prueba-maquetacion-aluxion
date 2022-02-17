import React from 'react'
import "./Mueble.css"

function Mueble(props) {
  return (
    <section className="mueble-container">
      <article className="mueble-description">
        <span className="author separation">{props.author}</span>
        <h2 className="name separation">{props.name}</h2>
        <p className="description separation">{props.description}</p>
        <button onClick={() => alert("Product Details")} className="button separation">Product Details</button>
      </article>
      <article className="mueble-image">
        <div className="image-container">
          <img src={props.image} alt={props.name + " " + props.description} />
        </div>
      </article>
    </section>
  )
}

export default Mueble