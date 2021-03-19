import React from 'react';
import './UploadPage.css';

const UploadVideoForm: React.FC = () => {
    return (
        <div className="UploadVideoContainer">

            <div className='titleContainer'>
                <label>Title:</label>
                <input type="text" placeholder="Title..." />
            </div>

            <div className='descriptionContainer'>
                <label>Description:</label>
                <textarea placeholder="Description..."/>
            </div>

            <div className="bottomSection">

                <div className='thumbnailContainer'>
                <input
                    type="file"
                    id="uploadThumbnail"
                    style={{ display: "none" }}
                />
                    <div id="uploadThumbnail">
                        <label htmlFor="uploadThumbnail"> - Select - </label>
                    </div>
                </div>
                <div className='uploadButtonContainer'>
                    <button>Upload Video</button>
                </div>

            </div>
           
            
        </div>
    )
}

export default UploadVideoForm

