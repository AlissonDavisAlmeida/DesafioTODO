import NavBar from "../NavBar/NavBar";
import styles from "./layout.module.css"


interface LayoutProps{
    children : any
}

function Layout(props : LayoutProps) {
    return ( 
        <div className={`container `}>
            <div className={`row justify-content-start ${styles.linha}`}>
                <div className="col">
                    <NavBar/>
                </div>
            </div>
            <div className={`row mt-4 ${styles.segundaLinha} `}>
            <div className="col w-100 ">

            {props.children}
            </div>
            </div>
        </div>
     );
}

export default Layout;