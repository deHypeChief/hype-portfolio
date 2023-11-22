import Button from "../button/button";
import { LoadingEye } from "../loading/loading";
import eyeImg from './../../assets/images/icons/eye logo.png';
import './style.css'

export default function Navbar() {
    return (
        <main className="Navbar">
            <nav className="nav-desktop">
                <div className="navList">
                    <div className="menu">
                        <Button>Menu</Button>
                    </div>
                    <div className="logo">
                        <div className="logoIn">
                            <LoadingEye/>
                        </div>
                    </div>
                    <div className="hire">
                        <Button>Hire Me</Button>
                    </div>
                </div>
            </nav>
        </main>
    )
}