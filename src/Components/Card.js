import "./Card.css"
function Card(Props){
    return(
    <>
    <div className="card-content">
        <div className="card-top">{Props.CardDetails}</div>
        <div className="card-bottom">
            <div className="card-bottom-left">
                <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"/>
            </div>
            <div className="card-bottom-right">
                <p className="p5">Gladis Lennon</p>
                <p className="p6">Head of SEO</p>
            </div>
        </div>
    </div>
    </>
    )
};

export default Card;