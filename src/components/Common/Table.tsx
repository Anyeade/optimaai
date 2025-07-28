/* eslint-disable */
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
          const thead = child as React.ReactElement<any>;
          return React.cloneElement(thead, {
            className: "",
            children: React.Children.map(thead.props.children, (row) => {
              if (React.isValidElement(row)) {
                const tr = row as React.ReactElement<any>;
                return React.cloneElement(tr, {
                  children: React.Children.map(tr.props.children, (cell) => {
                    if (React.isValidElement(cell)) {
                      const th = cell as React.ReactElement<any>;
                      return React.cloneElement(th, {
                        className: "px-4 py-3 min-w-[140px] whitespace-normal break-words align-top font-semibold text-base text-gray-800 dark:text-gray-100",
                      });
                    }
                    return cell;
                  })
                });
              }
              return row;
            })
          });
        }
        if (React.isValidElement(child) && child.type === "tbody") {
          const tbody = child as React.ReactElement<any>;
          return React.cloneElement(tbody, {
            className: "",
            children: React.Children.map(tbody.props.children, (row) => {
              if (React.isValidElement(row)) {
                const tr = row as React.ReactElement<any>;
                return React.cloneElement(tr, {
                  children: React.Children.map(tr.props.children, (cell) => {
                    if (React.isValidElement(cell)) {
                      const td = cell as React.ReactElement<any>;
                      return React.cloneElement(td, {
                        className: "px-4 py-3 min-w-[140px] whitespace-normal break-words align-top",
                      });
                    }
                    return cell;
                  })
                });
              }
              return row;
            })
          });
        }
        return child;
      })}
    </table>
  </div>
);

export default Table;
