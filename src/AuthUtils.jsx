const AuthUtils = {
    // Check if user is logged in
    isLoggedIn: () => {
      return localStorage.getItem("currentUser") !== null;
    },
    
    // Get current user
    getCurrentUser: () => {
      const currentUser = localStorage.getItem("currentUser");
      return currentUser ? JSON.parse(currentUser) : null;
    },
    
    // Logout
    logout: () => {
      localStorage.removeItem("currentUser");
      window.location.href = "/login";
    }
  };
  
  export default AuthUtils;