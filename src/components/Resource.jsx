export default function Resource({
  title,
  link,
  types,
  cost,
  description,
  features,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="resource w-[225px] py-4 bg-primaryButton/5 rounded-md"
    >
      <h3 className=" text-lg font-bold text-center underline decoration-solid	 decoration-4 decoration-accent transition ease-in-out delay-300 duration-300	underline-offset-2 hover:underline-offset-4">
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
      </div>{" "}
    </a>
  );
}
