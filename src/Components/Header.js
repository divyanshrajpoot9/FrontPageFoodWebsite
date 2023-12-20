import "./Header.css"

function Header(){
    return(
    <>
    <div className="header">
    <div className="logo">
       <div className="logoContent">
            <img src="https://flowbite.com/docs/images/logo.svg"/>
            <p>GeekFood</p>
       </div>

    </div>
    <div className="mid-nav">
        <a href="#">Home</a>
        <a href="#">Quotes</a>
        <a href="#">Restaurant</a>
        <a href="#">Foods</a>
        <a href="#">Contact</a>
    </div>
    <div className="header-button">
        
    </div>
    </div>
    </>
    )
};

export default Header;
// https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80