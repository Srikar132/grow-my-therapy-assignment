type MapEmbedProps = {
    src: string
  }
  
  const MapEmbed: React.FC<MapEmbedProps> = ({ src }) => {
    return (
      <div className="w-full h-[300px]">
        <iframe
          src={src}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 rounded-md w-full h-full"
        />
      </div>
    )
  }
  
  export default MapEmbed
  