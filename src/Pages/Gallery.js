import React, { useEffect, useState } from 'react';
import './Gallery.css';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import ScrollButton from "../Component/ScrollButton";

const Gallery = () => {

    const url = "http://localhost:5000";

    const [galleryData, setData] = useState([]);

    useEffect(() => {

        const getData = async () => {
            axios.get(`${url}/getAssets`).then((d) => {
                setData(d.data);
            })
        }

        getData();

    }, []);

    return (
        <>
            <h1>GALLERY</h1>
            <Container>

                {
                    galleryData?.map((d) => (
                        <div className="responsive">
                            <div className="gallery">
                                <a target="_blank" href="img_5terre.jpg">
                                    <img src={d.assetLink} alt="Cinque Terre" width="600"
                                        height="400" />
                                </a>
                                <div className="desc">Add a description of the image here</div>
                            </div>
                        </div>
                    ))
                }

            </Container>
            <ScrollButton />
        </>
    );
}

export default Gallery;
