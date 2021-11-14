import { Link } from "react-router-dom";


function Toolbar() {
    return(
        <div>
            <nav className="navbar">
                
                <ul className="nav-list">
                    <h1><Link to='/' className="nav-title">Home Page</Link></h1>
                    <li className="nav-item">
                        <Link to='/' className="nav-items">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/posts' className="nav-items">Posts</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/todos' className="nav-items">Todos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/users' className="nav-items">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/photos' className="nav-items">Photos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/comments' className="nav-items">Comments</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/albums' className="nav-items">Albums</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Toolbar;