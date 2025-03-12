import { useState } from "react";
const Home = () => {
    const [emailText, setEmailText] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const handleDetect = () => {
      if (!emailText.trim()) return;
      
      setLoading(true);
      
      // Placeholder for your actual model API call
      setTimeout(() => {
        setResult({
          isPhishing: Math.random() > 0.5, // Replace with your model result
          confidence: Math.floor(Math.random() * 100)
        });
        setLoading(false);
      }, 1000);
    };
  
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-xl font-normal mb-6">Phishing Email Detector</h1>
        
        <textarea
          className="w-full p-3 border border-gray-200 rounded mb-4 focus:outline-none focus:border-gray-400"
          rows="6"
          placeholder="Paste email content here..."
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
        />
        
        <button
          onClick={handleDetect}
          disabled={loading || !emailText.trim()}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {loading ? "Analyzing..." : "Detect"}
        </button>
        
        {result && (
          <div className={`mt-6 p-4 rounded ${
            result.isPhishing ? 'bg-red-50' : 'bg-green-50'
          }`}>
            <div className="flex items-center">
              <span className="text-lg mr-2">
                {result.isPhishing ? '⚠️' : '✓'}
              </span>
              <span className="font-medium">
                {result.isPhishing ? 'Phishing Detected' : 'Legitimate Email'}
              </span>
              <span className="ml-auto text-sm text-gray-500">
                {result.confidence}% confidence
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Home;