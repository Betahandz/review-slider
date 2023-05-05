const Personnel = ({name, image, title, quote, classes}) => {
    return (
        <article className={classes}>
            <figure className="img">
                <img src={image} alt={name} loading="lazy" />
            </figure>
            <h1 className="naming">{name}</h1>
            <p className="job">{title}</p>
            <q className="quote">{quote}</q>
        </article>
    )
}

export default Personnel;