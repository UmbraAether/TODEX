import image from '../assets/image.png'

function NewsItem({ title, description, src, url }) {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-3"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src?src:image}
        style={{ height: "200px", width: "330px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description?description.slice(0, 90):"This is current news."}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
