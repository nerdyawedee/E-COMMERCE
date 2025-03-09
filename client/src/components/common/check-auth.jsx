import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  console.log(location.pathname, isAuthenticated);

  // Redirect to login if not authenticated and not on login/register pages
  if (!isAuthenticated && !["/auth/login", "/auth/register"].includes(location.pathname)) {
    return <Navigate to="/auth/login" replace />;
  }

  // Redirect logged-in users away from login/register pages
  if (isAuthenticated && ["/auth/login", "/auth/register"].includes(location.pathname)) {
    return <Navigate to={user?.role === "admin" ? "/admin/dashboard" : "/shop/home"} replace />;
  }

  // Handle root path redirection based on role
  if (location.pathname === "/") {
    if (!isAuthenticated) return <Navigate to="/auth/login" replace />;
    return <Navigate to={user?.role === "admin" ? "/admin/dashboard" : "/shop/home"} replace />;
  }

  // Prevent non-admin users from accessing admin routes
  if (isAuthenticated && user?.role !== "admin" && location.pathname.startsWith("/admin")) {
    return <Navigate to="/unauth-page" replace />;
  }

  // Prevent admin users from accessing shop routes
  if (isAuthenticated && user?.role === "admin" && location.pathname.startsWith("/shop")) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <>{children}</>;
}

export default CheckAuth;
