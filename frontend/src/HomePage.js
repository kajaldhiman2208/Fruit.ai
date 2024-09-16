import React from 'react';
import OutlinedCard from './components/ui/CardHome';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate('/chat');
  };

  const handleTranslateClick = () => {
    navigate('.translate');
  };

  const handleFaqClick = () => {
    navigate('faq');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '40px',
        height: '70vh',
        width: '50%',
        margin: '00px auto 0',
      }}
    >
      <OutlinedCard 
      title="Chat.ai"
      description="Hi ask me about availability, prices of fruits"
      buttonText="Click to Chat" 
      onClick={handleChatClick} />

      <OutlinedCard
      title="Translate"
      description="This is a translater"
      buttonText="Explore"
      onClick={handleTranslateClick} />

      <OutlinedCard
      title="FAQ's"
      description="Ask me about frequently asked questions"
      buttonText="Click"
      onClick={handleFaqClick} />

      <OutlinedCard
      title="About"
      description="This is about me"
      buttonText="Explore"
      onClick={handleAboutClick} />
    </div>
  );
}

export default HomePage;
