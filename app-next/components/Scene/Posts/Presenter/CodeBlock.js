const CodeBlock = ({ children, title }) => {
  return (
    <div
      className={
        "mb-6 text-gray-700 leading-8 p-2 px-4 bg-blue-100 rounded-lg overflow-x-auto shadow hover:shadow-md transition-shadow"
      }
    >
      {children}
      {title && (
        <div className="w-full flex justify-center mt-2">
          <p className="p-1 px-6 bg-blue-200 rounded-lg shadow-sm">{title}</p>
        </div>
      )}
    </div>
  );
};
export default CodeBlock;
