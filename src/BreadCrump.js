import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink, Route } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const SimpleBreadcrumbs = () => {
  //   const convertToUpper = (str) => {
  //     const newArr = str.split("-");
  //     newArr[0][0].toUpperCase() +
  //       newArr[0].substring(1) +
  //       newArr[1][0].toUpperCase() +
  //       newArr[1].substring(1);

  //     return newArr.join(" ");
  //   };
  //   convertToUpper("My-ccount");
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split("/").filter((x) => x);
        return (
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' />}
            aria-label='Breadcrumb'
          >
            <RouterLink color='inherit' to='/'>
              Home
            </RouterLink>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography color='textPrimary' key={to}>
                  <div style={{ display: "flex" }}>
                    {value.split("-").map((el) => (
                      <span
                        style={{
                          textTransform: "capitalize",
                          marginLeft: "4px",
                        }}
                      >
                        {el}
                      </span>
                    ))}
                  </div>
                </Typography>
              ) : (
                <RouterLink color='inherit' to={to} key={to}>
                  <div style={{ display: "flex" }}>
                    {value.split("-").map((el) => (
                      <span
                        style={{
                          textTransform: "capitalize",
                          marginLeft: "4px",
                        }}
                      >
                        {el}
                      </span>
                    ))}
                  </div>
                </RouterLink>
              );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
};
export default SimpleBreadcrumbs;
