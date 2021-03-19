import React,{ useState } from 'react';
import './UploadPage.css';
import CloseIcon from "@material-ui/icons/Close";
import UploadVideoForm from './UploadVideoForm';

const UploadPage:React.FC = () => {
    const [fileSelected, setFileSelected] = useState(false);
    return (
        <div className="UploadPage">
            <div className="SelectFileContainer">
                <div className="topSection">
                    <div className="leftSide">
                        <h2>Upload Video</h2>
                    </div>
                    <div className="rightSide">
                        <CloseIcon id="closeIcon" />
                    </div>
                </div>
                <div className="body" id={fileSelected ? "Selected" : ""}>
                {!fileSelected ? (
                    <>
                    <h4>Upload A Video From Your Computer</h4>
                    <input 
                        type="file"
                        id="uploadInput"
                        accept="video/mp4"
                        style={{ display: "none" }}
                        onChange={() => setFileSelected(true)}
                    />
                    <div id="uploadButton">
                        <label htmlFor="uploadInput">Select File</label>
                    </div>
                    </>
                     ) : (
                            <UploadVideoForm />
                        )}
                </div>
                
            </div>
           
            
        </div>
    )
}

export default UploadPage;
