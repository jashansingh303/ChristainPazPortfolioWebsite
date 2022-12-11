import NavBar from "./navbar"

function PortfolioHero() {

    return(
        <div>
            <NavBar/>
            <div className="max-w-[80%] mx-auto pt-[5%] uppercase">
                <nav>
                    <ul>
                        <li><a href="">Illustration</a></li>
                        <li><a href="">Animation</a></li>
                        <li><a href="">Motion Graphics</a></li>
                        <li><a href="">Character Designs</a></li>
                        <li><a href="">Storyboards</a></li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default PortfolioHero