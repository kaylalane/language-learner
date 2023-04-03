
export default function Resource ({title, link, types, cost, description}) {
  return (

    <div className="resource">
      <a href={link} target="_blank">
        <h3 className="font-bold text-center">{title}</h3>
      </a>
      
      <div className="features">
        <p>{description}</p>
        <h4>Type</h4>
        <ul>
          {types.map((type) => (
            <li key={type} className="">
              {type}
            </li>
          ))}
        </ul>
       </div>
    </div>
  )

}