const Loading: React.FC = () => {
    // This component can be used to show a loading spinner or animation
    
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}
export default Loading;