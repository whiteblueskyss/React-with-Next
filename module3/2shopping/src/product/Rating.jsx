export default function Rating({ value }) {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="flex items-center my-1">
      <div className="flex text-yellow-400">
        {arr.map((val) => (
          <span key={val} className={val <= value ? "" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
      <span className="text-xs text-gray-500 ml-1">{value}/5</span>
    </div>
  );
}
