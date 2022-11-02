import React from 'react';
import Style from './Researches.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function researches() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd researches
            </p>
            <p><span style={{color: info.baseColor}}>researches <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Currently Researching Topics</p>
            <ul className={Style.researches}>
                {info.researches.map(topics => <li>{topics}</li>)}
            </ul>
            <p><span style={{color: info.baseColor}}>researches/links <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Useful Links</p>
            <ul className={Style.links}>
                <li><a href= 'https://docs.alchemy.com/docs' target={"_blank"} rel="noopener noreferrer"> Alchemy road map for new web3 developers</a></li>
                <li><a href= 'https://hardhat.org/tutorial' target={"_blank"} rel="noopener noreferrer"> Hardhat Tutorial</a></li>
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={researches()}/>
        </Box>
    )
}