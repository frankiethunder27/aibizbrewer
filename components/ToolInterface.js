'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ToolInterface({
  toolName,
  systemPrompt,
  placeholder,
  conversationStarters = [],
}) {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e, starterText = null) => {
    e?.preventDefault();
    
    const messageToSend = starterText || userInput;
    if (!messageToSend.trim()) return;

    setIsLoading(true);

    // Add user message to conversation
    const newUserMessage = { role: 'user', content: messageToSend };
    setConversation((prev) => [...prev, newUserMessage]);
    setUserInput('');

    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tool: toolName,
          systemPrompt,
          userMessage: messageToSend,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setConversation((prev) => [
          ...prev,
          { role: 'assistant', content: data.response },
        ]);
      } else {
        toast.error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    const fullConversation = conversation
      .map((msg) => `${msg.role === 'user' ? 'You' : 'AI'}:\n${msg.content}`)
      .join('\n\n---\n\n');

    navigator.clipboard.writeText(fullConversation);
    toast.success('Copied to clipboard!');
  };

  const handleReset = () => {
    setConversation([]);
    setUserInput('');
    toast.success('Conversation reset');
  };

  return (
    <div className="space-y-6">
      {/* Conversation Starters */}
      {conversationStarters.length > 0 && conversation.length === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {conversationStarters.map((starter, idx) => (
            <button
              key={idx}
              onClick={(e) => handleSubmit(e, starter)}
              className="btn btn-outline text-left justify-start h-auto py-4"
              disabled={isLoading}
            >
              {starter}
            </button>
          ))}
        </div>
      )}

      {/* Conversation Display */}
      {conversation.length > 0 && (
        <div className="space-y-4 bg-base-200 p-6 rounded-lg max-h-[600px] overflow-y-auto">
          {conversation.map((message, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg ${
                message.role === 'user'
                  ? 'bg-primary text-primary-content ml-8'
                  : 'bg-base-100 mr-8'
              }`}
            >
              <div className="font-semibold mb-2">
                {message.role === 'user' ? 'You' : 'AI'}
              </div>
              <div className="whitespace-pre-wrap">{message.content}</div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 p-4 bg-base-100 rounded-lg mr-8">
              <span className="loading loading-dots loading-sm"></span>
              <span>Analyzing...</span>
            </div>
          )}
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={placeholder}
          className="textarea textarea-bordered w-full min-h-[120px]"
          disabled={isLoading}
        />
        <div className="flex gap-4 flex-wrap">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading || !userInput.trim()}
          >
            {isLoading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Processing...
              </>
            ) : (
              'Send'
            )}
          </button>
          {conversation.length > 0 && (
            <>
              <button
                type="button"
                onClick={handleCopy}
                className="btn btn-outline"
                disabled={isLoading}
              >
                📋 Copy All
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="btn btn-ghost"
                disabled={isLoading}
              >
                🔄 Reset
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
