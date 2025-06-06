
import React from 'react';
import { Code } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Header = () => {
  return (
    <header className="bg-background shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AI Code Interviewer</h1>
              <p className="text-sm text-muted-foreground">Practice coding with AI feedback</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>AI Ready</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
