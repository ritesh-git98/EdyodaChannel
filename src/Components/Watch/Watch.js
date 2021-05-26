import React, { useState, useEffect } from 'react';
import './Watch.css'
import Button from '@material-ui/core/Button';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import QueueIcon from '@material-ui/icons/Queue';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography } from '@material-ui/core';
import Loader from '../../Assets/loader.svg'


const Watch = () => {
    const url = "https://player.vimeo.com/video/370492495";
    const author = "qaifi";
    const title = "Somethingdsaassssssssssssssssssssssssssssssssssssssssssssssssssss";
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    if (!isLoaded) {
        return <div>
            <img className="loader" src={Loader} />
        </div>;
    } else {
        return (
            <>
                <div className="mainContainer">
                    <div className="videoSection">
                        <div className="videoWrapper">
                            <iframe src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                        </div>
                        <Typography variant="h4" className="title"><span>{title}...</span>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<ThumbUpIcon />}
                            > Like</Button>
                        </Typography>
                        <div className="videoActions">
                            <Button
                                // color="primary"
                                size="large"
                                startIcon={<AccountCircleIcon />}
                            > {author}</Button>

                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<QueueIcon />}
                            > Subscribe</Button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Watch;