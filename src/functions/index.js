export const getUser = () => {
    if (typeof window !== "undefined") {
        let name = localStorage.getItem("username");
        let pass = localStorage.getItem("password");
        let isLoggedIn = localStorage.getItem("isLoggedIn");
        isLoggedIn = isLoggedIn ? eval(isLoggedIn) : isLoggedIn

        return ({ name, pass, isLoggedIn })
    }
};
