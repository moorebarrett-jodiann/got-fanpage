// Import images
import logo from '../images/logo.png';

function CatalogCards(props) {
    return (
        <>
            {props.items.map(item => (
                <div className="character-card" key={item.id} onClick={() => props.onClick(item)}>
                    {item.imageUrl ? 
                        <>
                            <div className="image-container">
                                <div className="img-bg">
                                    <div className="character-img">
                                        <img src={item.imageUrl} alt={item.fullName} />
                                        <div className="card-seal">
                                            <img src={logo} alt="seal"/>
                                        </div>
                                        <div className="info">
                                            <p className="character-name">{item.fullName}</p>
                                            <p className="character-title">( {item.title} )</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    : 
                        <p>Character Not Available</p>
                    }              
                </div>
            ))}
        </>
    )
}

export default CatalogCards