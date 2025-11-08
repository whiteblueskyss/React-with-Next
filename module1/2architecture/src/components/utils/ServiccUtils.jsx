export function Heading({ text }) {
  return (
    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
      {text}
    </h2>
  );
}

export function Para({ text }) {
  return <p className="mb-8 font-light lg:text-xl">{text}</p>;
}
