
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader, Code } from 'lucide-react';
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  code: string;
  onCodeChange: (code: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  selectedLanguage,
  onLanguageChange,
  code,
  onCodeChange,
  onSubmit,
  isSubmitting
}) => {
  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'go', label: 'Go' }
  ];

  const getDefaultCode = (language: string) => {
    switch (language) {
      case 'javascript':
        return `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Your solution here
    
};`;
      case 'python':
        return `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Your solution here
        pass`;
      case 'java':
        return `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your solution here
        
    }
}`;
      case 'cpp':
        return `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Your solution here
        
    }
};`;
      case 'go':
        return `func twoSum(nums []int, target int) []int {
    // Your solution here
    
}`;
      default:
        return '';
    }
  };

  React.useEffect(() => {
    if (!code) {
      onCodeChange(getDefaultCode(selectedLanguage));
    }
  }, [selectedLanguage]);

  return (
    <Card className="h-full border-0 shadow-lg bg-white flex flex-col">
      <CardHeader className="pb-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Code className="w-5 h-5" />
            <span>Code Editor</span>
          </CardTitle>
          
          <Select value={selectedLanguage} onValueChange={onLanguageChange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {languages.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0">
        <div className="flex-1 border rounded-lg mx-6 mb-4 overflow-hidden">
          <Editor
            height="100%"
            language={selectedLanguage}
            value={code}
            onChange={(value) => onCodeChange(value || '')}
            theme="vs"
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollbar: {
                vertical: 'auto',
                horizontal: 'auto'
              },
              automaticLayout: true,
              tabSize: 2,
              wordWrap: 'on'
            }}
          />
        </div>
        
        <div className="px-6 pb-6">
          <Button 
            onClick={onSubmit}
            disabled={isSubmitting || !code.trim()}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5"
          >
            {isSubmitting ? (
              <>
                <Loader className="w-4 h-4 mr-2 animate-spin" />
                AI is analyzing your code...
              </>
            ) : (
              'Submit for AI Review'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
