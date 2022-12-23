import App from "./App";
import { useEffect, useState } from "react";
function DefaultApp(){
    const [savePlan, setSavePlan] = useState([]);
    const [mainSize,setMainSize] = useState(false);
    const [init, setInit] = useState(false);
    useEffect(()=>{
        setInit(true);
    },[]);
    
    return(
        <>
            {init ?(
                <App savePlan={savePlan} setSavePlan={setSavePlan} mainSize={mainSize} setMainSize={setMainSize}/>
                ):(
                "Initializing..."
            )}
            <footer style={{bottom:"5px",left:"45%", position: "absolute"}}>&copy; {new Date().getFullYear()} firstSideProject Planning</footer>
        </>
    )
}
export default DefaultApp;