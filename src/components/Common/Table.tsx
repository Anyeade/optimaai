import React from "react";


const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = ({ children, className = "", ...props }) => (
  <div className="overflow-x-auto my-6">
    <table
      className={`min-w-full border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-sm text-left whitespace-normal ${className}`}
      {...props}
    >
      {/* Apply spacing and wrapping to all table cells */}
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === "thead") {
          return React.cloneElement(child, {
            className: "",
            children: React.Children.map(child.props.children, (row) =>
              React.isValidElement(row)
                ? React.cloneElement(row, {
                    children: React.Children.map(row.props.children, (cell) =>
                      React.isValidElement(cell)
                        ? React.cloneElement(cell, {
                            className: "px-4 py-3 min-w-[140px] whitespace-normal break-words align-top font-semibold text-base text-gray-800 dark:text-gray-100",
                          })
                        : cell
                    )
                  })
                : row
            ),
          });
        }
        if (React.isValidElement(child) && child.type === "tbody") {
          return React.cloneElement(child, {
            className: "",
            children: React.Children.map(child.props.children, (row) =>
              React.isValidElement(row)
                ? React.cloneElement(row, {
                    children: React.Children.map(row.props.children, (cell) =>
                      React.isValidElement(cell)
                        ? React.cloneElement(cell, {
                            className: "px-4 py-3 min-w-[140px] whitespace-normal break-words align-top",
                          })
                        : cell
                    )
                  })
                : row
            ),
          });
        }
        return child;
      })}
    </table>
  </div>
);

export default Table;
