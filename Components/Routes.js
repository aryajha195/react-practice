import { Route } from "react-router-dom"
import AutoComplete from "./AutoComplete"

const Routes = () => {
    return (
        <Routes>
        <Route path="/" element={<AutoComplete/>}></Route>
        </Routes>
    )
}

export default Routes