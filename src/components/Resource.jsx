export default function Resource({ title, link, types, description }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="resource w-[225px] py-4 bg-accent text-bg rounded-md"
    >
      <h3 className=" text-lg  font-bold text-center ">
        {title}
      </h3>
      <div className=" text-sm p-4">
        <p>{description}</p>

        <div className="flex gap-1 pt-4">
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
    </a>
  );
}
