import { Link } from "react-router-dom";
function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg border-bottom " style={{ backgroundColor: "#FFF" }}>
            <div class="container p-2">
                <Link to={"/"} class="navbar-brand" href="#"><img src="media/images/logo.svg" style={{ width: "25%" }} /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to={"/signup"} class="nav-link active" aria-current="page" href="#">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/about"} class="nav-link active" href="#">About</Link>
                            </li>
                             <li class="nav-item">
                                <Link to={"/product"} class="nav-link active" href="#">Products</Link>
                            </li>
                             <li class="nav-item">
                                <Link to={"/Pricing"} class="nav-link active" href="#">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"Support"} class="nav-link active" href="#">Support</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;