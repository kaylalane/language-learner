export default function Resource({ title, link, types, cost, description, features }) {
  return (
    <div className="resource">
      <a href={link} target="_blank">
        <h3 className="font-bold text-center">{title}</h3>
      </a>

      <div className="information">
        <p>{description}</p>

        <div className="type">
          <h4>Type:</h4>
          <ul>
            {types.map((type) => (
              <li key={type} className="">
                {type}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
