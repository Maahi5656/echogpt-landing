import Link from 'next/link'
import Image from 'next/image'

import logo from '../../assets/logo.png'

const Sidebar = () => {
    return (
        <>
            <div className="navigation">
                <ul>
                    <li>
                        <Link href="/dashboard">
                            <span className="icon" style={{padding: "0px 0px 0px 15px"}}>
                                <Image src={logo} width={45} height={45} alt='logo' />
                            </span>
                            <span className="title">
                                <h2>EchoGPT</h2>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <span className="icon">
                                <i className="fas fa-home" aria-hidden="true"></i>
                            </span>
                            <span className="title">Image Studio</span>
                        </Link>    
                    </li>
                    <li>
                        <Link href="#">
                            <span className="icon">
                                <i className="fas fa-solid fa-layer-group"></i>
                            </span>
                            <span className="title">Video Studio</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <span className="icon">
                                {/* <i className="fas fa-users" aria-hidden="true"></i> */}
                                <i className="fas fa-solid fa-tag"></i>
                            </span>
                            <span className="title">Compare</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <span className="icon">
                                <i className="fas fa-users" aria-hidden="true"></i>
                            </span>
                            <span className="title">Connectors</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <span className="icon">
                                <i className="fas fa-comment" aria-hidden="true"></i>
                            </span>
                            <span className="title">History</span>
                        </Link>   
                    </li>
                    <li>
                        <Link href="#">
                            <span className="icon">
                                <i className="fas fa-info-circle" aria-hidden="true"></i>
                            </span>
                            <span className="title">Store</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link href="#">
                            <span className="icon">
                                <i className="fas fa-cog" aria-hidden="true"></i>
                            </span>
                            <span className="title">Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <span className="icon">
                                <i className="fas fa-unlock-alt" aria-hidden="true"></i>
                            </span>
                            <span className="title">Password</span>
                        </Link>
                    </li> */}
                    <li>
                        <Link href="#">
                            <span className="icon">
                                <i className="fas fa-cog" aria-hidden="true"></i>
                            </span>
                            <span className="title">Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </div>        
        </>
    )
}

export default Sidebar