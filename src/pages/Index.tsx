
import React, { useState } from 'react';
import { ChallengePanel } from '@/components/ChallengePanel';
import { CodeEditor } from '@/components/CodeEditor';
import { FeedbackPanel } from '@/components/FeedbackPanel';
import { Header } from '@/components/Header';

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate AI evaluation
    setTimeout(() => {
      setFeedback({
        correctness: {
          score: 85,
          issues: [
            "Consider edge case when array is empty",
            "Time complexity could be optimized"
          ],
          strengths: [
            "Good use of built-in methods",
            "Clean and readable code structure"
          ]
        },
        followUpQuestions: [
          "What is the time complexity of your solution?",
          "How would you handle very large input arrays?",
          "Can you optimize this for space complexity?"
        ]
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)]">
          {/* Challenge Panel */}
          <div className="lg:col-span-4">
            <ChallengePanel />
          </div>
          
          {/* Code Editor Panel */}
          <div className="lg:col-span-5">
            <CodeEditor
              selectedLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              code={code}
              onCodeChange={setCode}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
          
          {/* Feedback Panel */}
          <div className="lg:col-span-3">
            <FeedbackPanel feedback={feedback} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
