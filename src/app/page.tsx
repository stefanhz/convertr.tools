'use client';

import React, { useState } from 'react';

type Converter = {
  id: string;
  title: string;
  description: string;
  category: string;
};

const converters: Converter[] = [
  {
    id: 'html-to-markdown',
    title: 'HTML to Markdown',
    description: 'Convert HTML code to Markdown.',
    category: 'Web Dev',
  },
  {
    id: 'markdown-to-html',
    title: 'Markdown to HTML',
    description: 'Convert Markdown to HTML code.',
    category: 'Web Dev',
  },
  {
    id: 'json-formatter',
    title: 'JSON Formatter',
    description: 'Format and validate JSON data.',
    category: 'Data Formats',
  },
  {
    id: 'xml-formatter',
    title: 'XML Formatter',
    description: 'Format and validate XML data.',
    category: 'Data Formats',
  },
  {
    id: 'inch-to-metric',
    title: 'Inch to mm/cm/m',
    description: 'Convert inches to metric lengths.',
    category: 'Units',
  },
  {
    id: 'metric-to-imperial',
    title: 'Metric to Imperial',
    description: 'Convert mm/cm/m/km to inches/feet/yards/miles.',
    category: 'Units',
  },
  {
    id: 'nautical-miles-converter',
    title: 'Nautical Miles Converter',
    description: 'Convert between nautical miles and other units.',
    category: 'Units',
  },
  {
    id: 'case-converter',
    title: 'Case Converter',
    description: 'Convert text to Title Case, Sentence case, etc.',
    category: 'Text',
  },
];

const categories = Array.from(new Set(converters.map((c) => c.category)));

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConverter, setSelectedConverter] = useState<string | null>(null);

  const filteredConverters = converters.filter((converter) =>
    converter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    converter.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectConverter = (id: string) => {
    setSelectedConverter(id);
  };

  const handleBackToList = () => {
    setSelectedConverter(null);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {!selectedConverter && (
        <>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search converters... (e.g., JSON, inch to mm, title case)"
            className="w-full mb-6 rounded-md border border-gray-700 bg-gray-900 text-cyan-400 placeholder-cyan-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Search converters"
          />
          {categories.map((category) => {
            const convertersInCategory = filteredConverters.filter(
              (c) => c.category === category
            );
            if (convertersInCategory.length === 0) return null;
            return (
              <section key={category} className="mb-8">
                <h2 className="text-cyan-400 text-xl font-semibold mb-4 border-b border-gray-700 pb-1">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {convertersInCategory.map((converter) => (
                    <button
                      key={converter.id}
                      onClick={() => handleSelectConverter(converter.id)}
                      className="block p-6 border border-gray-700 rounded-md hover:border-cyan-400 transition-colors text-left bg-gray-800"
                    >
                      <h3 className="text-cyan-400 font-semibold mb-2">{converter.title}</h3>
                      <p className="text-gray-400 text-sm">{converter.description}</p>
                    </button>
                  ))}
                </div>
              </section>
            );
          })}
        </>
      )}

      {selectedConverter === 'json-formatter' && (
        <JsonFormatter onBack={handleBackToList} />
      )}

      {selectedConverter === 'markdown-to-html' && (
        <MarkdownToHtml onBack={handleBackToList} />
      )}

      {/* Placeholder for other converters */}
      {selectedConverter && !['json-formatter', 'markdown-to-html'].includes(selectedConverter) && (
        <div>
          <button
            onClick={handleBackToList}
            className="mb-4 px-4 py-2 bg-cyan-500 text-gray-900 rounded hover:bg-cyan-600"
          >
            &larr; Back to converters
          </button>
          <p className="text-gray-400">Converter &quot;{selectedConverter}&quot; is not implemented yet.</p>
        </div>
      )}
    </div>
  );
}

function JsonFormatter({ onBack }: { onBack: () => void }) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError(null);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Unknown error');
      }
      setOutput('');
    }
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-cyan-500 text-gray-900 rounded hover:bg-cyan-600"
      >
        &larr; Back to converters
      </button>
      <h2 className="text-cyan-400 text-2xl font-semibold mb-4">JSON Formatter</h2>
      <textarea
        className="w-full h-40 p-2 mb-2 bg-gray-800 text-cyan-400 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        placeholder="Paste JSON here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={formatJson}
        className="mb-4 px-4 py-2 bg-cyan-500 text-gray-900 rounded hover:bg-cyan-600"
      >
        Format JSON
      </button>
      {error && <p className="text-red-500 mb-2">Error: {error}</p>}
      <textarea
        className="w-full h-40 p-2 bg-gray-900 text-green-400 rounded border border-gray-700"
        readOnly
        value={output}
      />
    </div>
  );
}

function MarkdownToHtml({ onBack }: { onBack: () => void }) {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');

  const convertMarkdown = () => {
    // Simple markdown to HTML conversion (mock implementation)
    const escaped = markdown
      .replace(/&/g, '&')
      .replace(/</g, '<')
      .replace(/>/g, '>');
    const converted = escaped
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
      .replace(/\*(.*)\*/gim, '<i>$1</i>')
      .replace(/\n$/gim, '<br />');
    setHtml(converted);
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-cyan-500 text-gray-900 rounded hover:bg-cyan-600"
      >
        &larr; Back to converters
      </button>
      <h2 className="text-cyan-400 text-2xl font-semibold mb-4">Markdown to HTML</h2>
      <textarea
        className="w-full h-40 p-2 mb-2 bg-gray-800 text-cyan-400 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        placeholder="Enter Markdown here"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <button
        onClick={convertMarkdown}
        className="mb-4 px-4 py-2 bg-cyan-500 text-gray-900 rounded hover:bg-cyan-600"
      >
        Convert to HTML
      </button>
      <textarea
        className="w-full h-40 p-2 bg-gray-900 text-green-400 rounded border border-gray-700"
        readOnly
        value={html}
      />
    </div>
  );
}
