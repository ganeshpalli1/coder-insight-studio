
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ChallengePanel = () => {
  const challenge = {
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      }
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists."
    ]
  };

  return (
    <Card className="h-full border-0 shadow-lg bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-card-foreground">
            {challenge.title}
          </CardTitle>
          <Badge 
            variant="secondary"
            className={`${
              challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
              challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
              'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
            }`}
          >
            {challenge.difficulty}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6 overflow-y-auto">
        <div>
          <h3 className="font-medium text-card-foreground mb-2">Problem Description</h3>
          <p className="text-muted-foreground leading-relaxed">
            {challenge.description}
          </p>
        </div>

        <div>
          <h3 className="font-medium text-card-foreground mb-3">Examples</h3>
          {challenge.examples.map((example, index) => (
            <div key={index} className="bg-muted rounded-lg p-4 mb-3 border border-border">
              <div className="text-sm">
                <div className="mb-2">
                  <span className="font-medium text-card-foreground">Input:</span>
                  <code className="ml-2 text-blue-600 dark:text-blue-400 font-mono text-sm">
                    {example.input}
                  </code>
                </div>
                <div className="mb-2">
                  <span className="font-medium text-card-foreground">Output:</span>
                  <code className="ml-2 text-green-600 dark:text-green-400 font-mono text-sm">
                    {example.output}
                  </code>
                </div>
                <div>
                  <span className="font-medium text-card-foreground">Explanation:</span>
                  <span className="ml-2 text-muted-foreground">
                    {example.explanation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-medium text-card-foreground mb-2">Constraints</h3>
          <ul className="space-y-1">
            {challenge.constraints.map((constraint, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-2 flex-shrink-0"></span>
                <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
                  {constraint}
                </code>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
