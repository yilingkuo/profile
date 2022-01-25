import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";
import CardProfileFull from "./CardProfileFull";

export default function Sidebar({ brand, items, activeColor }) {
  const [sidebarShow, setSidebarShow] = React.useState("-translate-x-full");
  const activeColors = {
    red: "text-red-500 hover:text-red-700",
    orange: "text-orange-500 hover:text-orange-700",
    amber: "text-amber-500 hover:text-amber-700",
    emerald: "text-emerald-500 hover:text-emerald-700",
    teal: "text-teal-500 hover:text-teal-700",
    lightBlue: "text-lightBlue-500 hover:text-lightBlue-700",
    indigo: "text-indigo-500 hover:text-indigo-700",
    purple: "text-purple-700 hover:text-purple-900",
    pink: "text-pink-500 hover:text-pink-700",
  };
  return (
    <>
      <nav
        className={
          "block py-0 px-0 top-0 bottom-0 w-64 bg-white shadow-xl left-0 fixed flex-row flex-nowrap md:z-10 z-9999 transition-all duration-300 ease-in-out transform md:translate-x-0 " +
          sidebarShow
        }
      >
        <button
          className="md:hidden flex items-center justify-center cursor-pointer text-blueGray-700 w-6 h-10 border-l-0 border-r border-t border-b border-solid border-blueGray-100 text-xl leading-none bg-white rounded-r border border-solid border-transparent absolute top-1/2 -right-24-px focus:outline-none z-9998"
          onClick={() => {
            if (sidebarShow === "") {
              setSidebarShow("-translate-x-full");
            } else {
              setSidebarShow("");
            }
          }}
        >
          <i className="fas fa-ellipsis-v"></i>
        </button>
        {/* Collapse */}
        <div className="max-h-screen flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden">
          <div className="flex bg-white flex-col items-stretch opacity-100 relative mt-0 overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full">
            <CardProfileFull {...brand}/>
            <div className="md:flex-col md:min-w-full flex flex-col list-none">
              {items.map((prop, key) => {
                if (prop.divider) {
                  return <hr key={key} className="my-4 md:min-w-full" />;
                } else if (prop.title) {
                  return (
                    <h6
                      key={key}
                      className="md:min-w-full text-blueGray-500 text-sm font-bold block pt-1 pb-1 no-underline"
                    >
                      {prop.title}
                    </h6>
                  );
                } else if (prop.link && prop.link.to) {
                  return (
                    <Link
                      {...prop.link}
                      key={key}
                      className={classnames(
                        "text-xs  py-3 font-bold block",
                        {
                          [activeColors[activeColor]]: prop.active,
                          "text-blueGray-800 hover:text-blueGray-500":
                            !prop.active || prop.active === undefined,
                        }
                      )}
                    >
                      <i
                        className={classnames(prop.icon, "mr-2 text-sm", {
                          "opacity-75": prop.active,
                          "text-blueGray-400":
                            !prop.active || prop.active === undefined,
                        })}
                      ></i>
                      {prop.text}
                    </Link>
                  );
                } else {
                  return (
                    <a
                      {...prop.link}
                      key={key}
                      className={classnames(
                        "text-xs  py-3 font-bold block",
                        {
                          [activeColors[activeColor]]: prop.active,
                          "text-blueGray-800 hover:text-blueGray-500":
                            !prop.active || prop.active === undefined,
                        }
                      )}
                    >
                      <i
                        className={classnames(prop.icon, "mr-2 text-sm", {
                          "opacity-75": prop.active,
                          "text-blueGray-400":
                            !prop.active || prop.active === undefined,
                        })}
                      ></i>
                      {prop.text}
                    </a>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Sidebar.defaultProps = {
  items: [],
  activeColor: "pink",
};

Sidebar.propTypes = {
  // this only applies for those items that have active set to true
  activeColor: PropTypes.oneOf([
    "red",
    "orange",
    "amber",
    "emerald",
    "teal",
    "lightBlue",
    "indigo",
    "purple",
    "pink",
  ]),
  brand: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    list: PropTypes.arrayOf(
      PropTypes.oneOfType([
        // this will generate a profile info
        PropTypes.shape({
          icon: PropTypes.string,
          color: PropTypes.string,
          text: PropTypes.string,
        }),
      ])
    ),
    image: PropTypes.string,
    // props to pass to the wrapper link of the text and image
    // if you pass a prop named to, it will be generated as
    // Link from react-router-dom
    link: PropTypes.object,
  }),
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // this will generate a divider hr tag
      PropTypes.shape({
        divider: PropTypes.bool,
      }),
      // this will generate a text with the title string
      PropTypes.shape({
        title: PropTypes.string,
      }),
      // this will generate a Link/Anchor with bellow options
      PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
        // if set to true, the link will change color to the active one
        active: PropTypes.bool,
        // props to pass to the wrapper link of the text and icon
        // if you pass a prop named to, it will be generated as
        // Link from react-router-dom
        link: PropTypes.object,
      }),
    ])
  ),
};
