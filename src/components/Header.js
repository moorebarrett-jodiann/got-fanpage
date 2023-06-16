
function Header(props) {
    return (
        <>
            <header>
                <div className="container flexbox">
                    <div className="logo-container">
                        <a href="/" to="/"><img src={props.image} alt="logo"/></a>
                    </div>
                    <div className="nav-container">
                        <nav>
                            <ul>
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#newsletter">Newsletter</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="burger-menu"><i className="fa-solid fa-bars"></i></div>
                </div>
            </header>
        </>
    )
}

export default Header