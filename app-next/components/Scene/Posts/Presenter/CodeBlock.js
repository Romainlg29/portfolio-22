import { createContext } from "react";

export const CodeBlockContext = createContext();

const CodeBlock = ({ children, title, lang = "text" }) => {
  return (
    <CodeBlockContext.Provider value={lang}>
      <div
        className={
          "mb-6 p-2 bg-slate-900 rounded-lg shadow hover:shadow-md transition-shadow"
        }
      >
        <div className="p-2 px-4 text-gray-700 leading-8 overflow-x-auto">
          {children}
        </div>
        {title && (
          <div className="w-full flex justify-center mt-2">
            <p className="p-1 px-6 bg-slate-800 text-gray-100 rounded-lg shadow-sm">
              {title}
            </p>
          </div>
        )}
      </div>
    </CodeBlockContext.Provider>
  );
};
export default CodeBlock;
