import {useEffect, useRef, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./Components/Header";
import Advertising from "./Components/Advertising";
import Profile from "./Components/Profile";
import {UserContext} from "./UserContext";
import "./App.css"

const App = () => {
    const [user, setUser] = useState(null)
    const [dbURL] = useState('http://localhost:5000/')
    const firstUpdate = useRef(true)

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(dbURL + "user", {
                method: 'GET',

                })
            const data = await res.json()
            setUser(data)
        }
        fetchUser()
    }, [])

    useEffect(() => {
        console.log("User is: " + JSON.stringify(user))
    }, [user])

    // eslint-disable-next-line no-unused-expressions
    useEffect(() => {
        const updateUser = async () => {
            const res = await fetch(dbURL+"user", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            return res
        }
        if (firstUpdate.current) {
            firstUpdate.current = false
        } else {
            updateUser(user).then((res) => console.log("User updated: " + res.status))
        }
    }), [user]

    return (
        <Router>
            <div>
                <Header/>
                <UserContext.Provider value={{user, setUser}}>
                    <Routes>
                        <Route path="/"
                               exact
                               element={<Profile/>}>
                        </Route>
                        <Route path="/advertising"
                               exact
                               element={<Advertising/>}>
                        </Route>
                    </Routes>
                </UserContext.Provider>
            </div>
        </Router>
    )
}
export default App