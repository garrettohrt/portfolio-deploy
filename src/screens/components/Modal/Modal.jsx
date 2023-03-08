import "./Modal.css"

/**
 * 
 * @param {string} title - string: title of the modal
 * @param {string} description - string: description of the modal
 * @param {string} technologies - string: technologies of the modal
 * @param {string} image - string: image of the modal
 * @param {string} url - string: url of the modal
 * @param {string} repo - string: repo of the modal
 */
function Modal({ onClick, title, description, technologies, image, url, repo}) {
  return (
    <div className="modal-container">
        <div className="modal-content">
            <h2>{title}</h2>
            <button className="btn align-right" onClick={onClick}>
                X
            </button>
            <img className="span2" src={image} alt={title}/>
            <p className="span2">{description}</p>
            <p className="span2">{technologies}</p>
            <a href={url} target="blank" rel="noreferrer">
                <button className="btn">Visit Site</button>
            </a>
            <a href={repo} target="blank" rel="noreferrer">
                <button className="btn">Visit Repo</button>
            </a>
        </div>
        {/* <h1>{title}</h1>
        <p>{description}</p>
        <p>{technologies}</p>
        <img src={image} alt={title} />
        <a href={url} target="_blank" rel="noreferer"/>
        <a href={repo} target="_blank" rel="noreferer"/> */}

    </div>
  )
}

export default Modal