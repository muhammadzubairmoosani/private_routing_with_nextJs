import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import redirect from 'nextjs-redirect'

const PrivateRoute = (Component) => {

  const AuthenticatedRoutes = ({ ...props }) => {
    const { pathname } = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const Redirect = redirect('/')

    const getUser = () => {
      if (typeof window !== "undefined") {
        const name = localStorage.getItem("username");
        const pass = localStorage.getItem("password");
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        setUser({ name, pass, isLoggedIn })
      }
    };

    useEffect(() => {
      getUser()
      setLoading(false)
    }, [])

    if (loading) return 'loading...'

    switch (pathname) {
      case '/login':
      case '/signup':
        if (eval(user?.isLoggedIn)) {
          return <Redirect />
        } else {
          return <Component {...props} />
        }

      case '/profile':
        if (eval(user?.isLoggedIn)) {
          return <Component {...props} />
        } else {
          return <Redirect />
        }

      default:
        return <Redirect />
    }
  }

  return AuthenticatedRoutes
}

export default PrivateRoute
