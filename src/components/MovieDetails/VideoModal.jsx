import { useEffect } from 'react';
import BackButton from 'components/Shared/BackButton';

const VideoModal = ({ videoKey, onModalClose }) => {
  useEffect(() => {
    const handleEscapeClose = ({ key }) => {
      if (key !== 'Escape') return;
      onModalClose();
    };
    document.querySelector('html').classList.add('no-scroll');
    document.addEventListener('keydown', handleEscapeClose);

    return () => {
      document.querySelector('html').classList.remove('no-scroll');
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [onModalClose]);

  const handleOverlayClose = evt => {
    if (evt.target !== evt.currentTarget) return;
    onModalClose();
  };

  return (
    <div
      className="bg-black/70 z-20 fixed inset-0 w-full h-full animate-[fade-in_300ms_ease-out]"
      onClick={handleOverlayClose}
    >
      <div className="relative aspect-video max-h-full m-auto top-1/2 -translate-y-1/2">
        <iframe
          className="w-full h-full"
          title="YouTube Video"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <BackButton onClick={onModalClose} />
    </div>
  );
};

export default VideoModal;
