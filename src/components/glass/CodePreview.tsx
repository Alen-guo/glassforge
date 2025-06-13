'use client';

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, CheckCircle } from 'lucide-react';

interface CodePreviewProps {
  code: string;
  language: string;
  fileName?: string;
}

export default function CodePreview({ code, language, fileName }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const getLanguage = () => {
    switch (language) {
      case 'css':
      case 'tailwind':
        return 'css';
      case 'react':
      case 'react-ts':
        return 'tsx';
      case 'vue':
        return 'vue';
      case 'svelte':
        return 'svelte';
      case 'flutter':
        return 'dart';
      case 'swiftui':
        return 'swift';
      default:
        return 'text';
    }
  };

  return (
    <div className="relative">
      {/* 文件信息栏 */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          {fileName && (
            <span className="text-gray-400 text-sm ml-2">{fileName}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1 text-sm"
        >
          {copied ? (
            <>
              <CheckCircle className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* 代码预览 */}
      <div className="relative">
        <SyntaxHighlighter
          language={getLanguage()}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: '0 0 0.5rem 0.5rem',
            background: '#1a1a1a',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
          showLineNumbers
          wrapLines
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {/* 语言标签 */}
      <div className="absolute top-2 right-2">
        <span className="px-2 py-1 text-xs font-medium text-gray-400 bg-gray-800 rounded">
          {getLanguage().toUpperCase()}
        </span>
      </div>
    </div>
  );
} 