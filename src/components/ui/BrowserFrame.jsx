const BrowserFrame = ({ imageSrc, altText }) => {
  return (
    <div className="max-w-4xl mx-auto shadow-lg shadow-blue-100 rounded-lg overflow-hidden">
      {/* Browser Header */}
      <div className="bg-gray-200 dark:bg-gray-700 flex items-center justify-start p-2 space-x-2">
        {/* Browser buttons */}
        <span className="h-3 w-3 bg-red-500 rounded-full"></span>
        <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
        <span className="h-3 w-3 bg-green-500 rounded-full"></span>
      </div>
      {/* Image Display */}
      <div className="bg-white dark:bg-gray-900 p-4">
        <img src={imageSrc} alt={altText} className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default BrowserFrame;
