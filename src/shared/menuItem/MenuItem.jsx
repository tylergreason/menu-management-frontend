import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { searchUrl } from '../constants';

const Wrapper = styled.div`
    width: 20rem;
`;

const ItemDetails = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
`;

export function MenuItem() {

    const [imgUrl, setImgUrl] = useState('');

    let imgSource = '';


    useEffect( async() => {
        // console.log('updated');
        // if (!imgUrl) {
        //     let res = await fetch(searchUrl);
        //     let a = await res.json();
        //     console.log(a);
        //     console.log(a?.hits[0].largeImageURL);
        //     const largeImageURL = a?.hits[0].largeImageURL;
        //     setImgUrl(largeImageURL);
        // }
    })
        
    // const imgSource = 'https://pixabay.com/get/gecf546c974a441a56d1459dd5bf10ef166bac65615d3c6530b68b8388cdda11923901ea3b79b7dc1d4e9b98f0699c659_640.jpg';

    return (
        <Wrapper className="menu-item">
            <h3>Item Name</h3>
            <ItemDetails>
                <div>Description</div>
                <div>$XX</div>
                <img src={imgSource} alt=""/>
            </ItemDetails>
        </Wrapper>
    );
}
