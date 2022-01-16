import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList'

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id:1,
            name:'LUA CHON HOM NAY',
            thumbnalUrl:'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/e/f/b/defb50ebe2be08fd0eeae2a16ff497dc.jpg'
        },
        {
            id:2,
            name:'VIDEO HOT',
            thumbnalUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/d/6/e/6/d6e6201323fed8fb16886a3f428fc4f7.jpg'
        },
        {
            id:3,
            name:'ALBUM BOT',
            thumbnalUrl:'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/f/1/c/ff1c86f964e152ecec0b6cd9c302dc16.jpg'
        }
    ]

    return (
        <div>
            <h2>Co the ban se thich day</h2>
            <AlbumList albumList = {albumList}/>
        </div>
    );
}

export default AlbumFeature;