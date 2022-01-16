import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

AlbumList.propTypes = {
};

function AlbumList({ albumList }) {
    return (
        <div className='album'>
            {
                albumList.map(item => (
                    <div key={item.id}  >
                        <img src={item.thumbnalUrl} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default AlbumList;