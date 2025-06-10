import ReactPlayer from 'react-player';
import { IoCloseOutline } from "react-icons/io5";

function TrailerModal({ videoKey, toggleModal }) {
  return (
    <div className="modal-overlay active">
      <div className="modal-content">
        <button className="close-modal" onClick={toggleModal} aria-label='Close'>
          <div className="modal-icon"><IoCloseOutline /></div>
        </button>
        <div className="modal-video-container">
          <ReactPlayer
            width="100%"
            height="100%"
            url={`https://www.youtube.com/embed/${videoKey}?enablejsapi=1&origin=${window.location.origin}`}
            controls
          />
        </div>
      </div>
    </div>
  );
}

export default TrailerModal;
