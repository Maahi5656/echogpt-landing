"use client"

const Header = () => {

    const toggleMenu=()=>{
        let toggle = document.querySelector('.toggle');
        let navigation = document.querySelector('.navigation');
        let main = document.querySelector('.main');

        toggle.classList.toggle('active');
        navigation.classList.toggle('active');
        main.classList.toggle('active');        
    }

    return (
        <>
            <div className="topbar">
                <div className="toggle" onClick={toggleMenu}></div>
                <div className="search">
                    <label htmlFor="">
                        <i className="fas fa-search searchIcon"></i>
                        <input type="text" placeholder="Search Here...." name="" id="" />
                    </label>
                    <div className="user">
                        <img src="img/avatar.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header