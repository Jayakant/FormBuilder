import React from "react";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {

    const admin = "AdminUser"

    const [existingUsers, setExistingUsers] = React.useState([{name: "Admin", pw: "Letmein!99"}])

    const handleExistingUsers = (array) => {
        setExistingUsers(array)
    }

    const [formNameGlobal, setFormNameGlobal] = React.useState("");

    const handleFormNameChange = (name) => {
        setFormNameGlobal(name)
    }

    const [userSession, setUserSession] = React.useState(null)

    const [globalLoginRes, setGlobalLoginRes] = React.useState(null)

    const loginUser = (userCred) => {
        setGlobalLoginRes(userCred)
        setUserSession(userCred)
    }

    const logoutUser = () => {
        setUserSession(null);
    }

    const [chosentheme, setChosenTheme] = React.useState("Dark")

    const handleThemeChange = (selectedTheme) => {
        setChosenTheme(selectedTheme)
    }

    const [test, setTest] = React.useState("Heyy");

    const handleTestChange = (text) => {
        setTest(text);
    }

    const [formArray, setFormArray] = React.useState([]);

    const handleFormArrayChange = (array) => {
        setFormArray(array)
    }

    return <AuthContext.Provider value={{
        admin, userSession, globalLoginRes, setGlobalLoginRes, loginUser, logoutUser, chosentheme, setChosenTheme, handleThemeChange,
        formNameGlobal, handleFormNameChange,
        test, handleTestChange,
        formArray, handleFormArrayChange,
        existingUsers, handleExistingUsers
    }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return React.useContext(AuthContext)
}