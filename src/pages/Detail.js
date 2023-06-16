import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';


function Detail() {
    const [characterProfile, setCharacterProfile] = useState(null);
    // 'useParams' hook to retrieve the character name from the URL:
    const { id } = useParams();
    const Character_API = `https://thronesapi.com/api/v2/Characters/${id}`;
    const [message, setMessage] = useState("Loading profile details ...");

    useEffect(() => {
        axios
            .get(Character_API)
            .then(result => {
                setCharacterProfile(result.data);
            })
            .catch(error => {
                setMessage('Character details unavailable ...');
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, Character_API]);

    return (
        <>
            <div className="main-character-container">
                <div className="backsplash-img"></div>
                {characterProfile ? (
                    <>
                        <Helmet>
                            <title>{characterProfile.fullName}</title>
                        </Helmet>
                        <div className="character-profile container">
                            <div className="image-bg">
                                <figure className="profile-img">
                                    <img src={characterProfile.imageUrl} alt={characterProfile.name} />
                                </figure>
                            </div>
                            <div className="details">
                                <p className="profile-name">{characterProfile.fullName}</p>
                                <span className="underline"></span>
                                <p className="title"><span>( {characterProfile.title} )</span></p>
                                <p className="family"><span> of {characterProfile.family}</span></p>
                                <div className="ice-and-fire"></div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="error-container">
                        <p className="loading">{message}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Detail