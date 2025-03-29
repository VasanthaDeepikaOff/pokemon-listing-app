export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="w-40 h-40 sm:w-80 sm:h-80 bg-gray-300 rounded my-4"></div>
      <h1 className="h-6 w-1/2 md:w-1/4 bg-gray-300 rounded"></h1>
      <h2 className="h-4 w-1/3 md:w-1/5 bg-gray-300 rounded my-2"></h2>
      <ul className="mt-4 space-y-2">
        <li className="h-4 w-1/2 md:w-1/5 bg-gray-300 rounded"></li>
        <li className="h-4 w-1/2 md:w-1/5 bg-gray-300 rounded"></li>
        <li className="h-4 w-1/2 md:w-1/5 bg-gray-300 rounded"></li>
      </ul>
    </div>
  );
}
