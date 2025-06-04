
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';

interface FeedbackProps {
  feedback: {
    correctness: {
      score: number;
      issues: string[];
      strengths: string[];
    };
    followUpQuestions: string[];
  } | null;
}

export const FeedbackPanel: React.FC<FeedbackProps> = ({ feedback }) => {
  if (!feedback) {
    return (
      <Card className="h-full border-0 shadow-lg bg-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5" />
            <span>AI Feedback</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">Submit your code to receive AI feedback</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  };

  return (
    <Card className="h-full border-0 shadow-lg bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5" />
            <span>AI Feedback</span>
          </div>
          <Badge className={`${getScoreColor(feedback.correctness.score)}`}>
            Score: {feedback.correctness.score}/100
          </Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6 overflow-y-auto">
        {/* Strengths */}
        {feedback.correctness.strengths.length > 0 && (
          <div>
            <h3 className="flex items-center space-x-2 font-medium text-card-foreground mb-3">
              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span>Strengths</span>
            </h3>
            <ul className="space-y-2">
              {feedback.correctness.strengths.map((strength, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Issues */}
        {feedback.correctness.issues.length > 0 && (
          <div>
            <h3 className="flex items-center space-x-2 font-medium text-card-foreground mb-3">
              <AlertCircle className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span>Areas for Improvement</span>
            </h3>
            <ul className="space-y-2">
              {feedback.correctness.issues.map((issue, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Follow-up Questions */}
        <div>
          <h3 className="font-medium text-card-foreground mb-3">Follow-up Questions</h3>
          <div className="space-y-3">
            {feedback.followUpQuestions.map((question, index) => (
              <div key={index} className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-200 mb-1">
                  Question {index + 1}:
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-300">{question}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            AI feedback is generated to help improve your coding skills
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
