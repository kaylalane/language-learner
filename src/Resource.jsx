
export default function Resource ({title, link, types, cost, description}) {
  return (

    <div className="resource">
      <a href={link} target="_blank">
        <h2>{title}</h2>
      </a>
      
      <div className="features">
        <p>{description}</p>
        <h3>Type</h3>
        <ul>
          {types.map((type) => (
            <li key={type}>
              {type}
            </li>
          ))}
        </ul>
       </div>
    </div>
  )

}