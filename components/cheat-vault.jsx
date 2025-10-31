"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

const CheatVault = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTopics, setExpandedTopics] = useState([]);
  const [copiedId, setCopiedId] = useState(null);

  // Example data structure - replace with your actual data
  const topics = [
    {
      id: 1,
      title:
        "🔒 How to Lock & Hide Any Folder on Your PC (No Software Needed!)",
      description: " Easy Privacy Trick",
      content: {
        text: "✅ How to lock and unlock your files easily",
        code: `@ECHO OFF
title Folder Locker
if EXIST "Locker" goto UNLOCK
if NOT EXIST Private goto MDLOCKER
:CONFIRM
echo Are you sure you want to lock the folder? (Y/N)
set /p "cho=>"
if %cho%==Y goto LOCK
if %cho%==y goto LOCK
if %cho%==N goto END
if %cho%==n goto END
echo Invalid choice.
goto CONFIRM
:LOCK
ren Private "Locker"
attrib +h +s "Locker"
echo Folder locked.
goto End
:UNLOCK
echo Enter password to unlock:
set /p "pass=>"
if NOT %pass%==YOURPASSWORDHERE goto FAIL
attrib -h -s "Locker"
ren "Locker" Private
echo Folder unlocked.
goto End
:FAIL
echo Invalid password.
goto End
:MDLOCKER
md Private
echo Private folder created successfully.
goto End
:End
`,
        video: "",
      },
    },
    {
      id: 2,
      title:
        "🔒 How to Lock & Hide Any Folder on Your PC (No Software Needed!)",
      description: " Easy Privacy Trick",
      content: {
        text: "✅ How to lock and unlock your files easily",
        code: `@ECHO OFF
title Folder Locker
if EXIST "Locker" goto UNLOCK
if NOT EXIST Private goto MDLOCKER
:CONFIRM
echo Are you sure you want to lock the folder? (Y/N)
set /p "cho=>"
if %cho%==Y goto LOCK
if %cho%==y goto LOCK
if %cho%==N goto END
if %cho%==n goto END
echo Invalid choice.
goto CONFIRM
:LOCK
ren Private "Locker"
attrib +h +s "Locker"
echo Folder locked.
goto End
:UNLOCK
echo Enter password to unlock:
set /p "pass=>"
if NOT %pass%==YOURPASSWORDHERE goto FAIL
attrib -h -s "Locker"
ren "Locker" Private
echo Folder unlocked.
goto End
:FAIL
echo Invalid password.
goto End
:MDLOCKER
md Private
echo Private folder created successfully.
goto End
:End
`,
        video: "",
      },
    },
    // Add more topics here
  ];

  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const copyToClipboard = async (text, topicId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(topicId);
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="min-h-screen text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Section */}
        <div className="mb-12">
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
              <Search className="h-5 w-5 text-gray-400 opacity-100" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-xl 
                       bg-gray-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent transition-all duration-200 ease-in-out
                       placeholder:text-gray-400 text-white"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Topics Grid */}
        {filteredTopics.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-2">No topics found</h3>
              <p className="text-gray-400">
                No topics match your search "{searchQuery}". Try different
                keywords or check your spelling.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden 
                       transition-all duration-300 ease-in-out hover:shadow-lg h-fit
                       hover:shadow-blue-500/10 border border-gray-700/50"
              >
                {/* Topic Header */}
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => {
                    setExpandedTopics((prev) =>
                      prev.includes(topic.id)
                        ? prev.filter((id) => id !== topic.id)
                        : [...prev, topic.id]
                    );
                  }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{topic.title}</h3>
                    <button className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200">
                      {expandedTopics.includes(topic.id) ? (
                        <>
                          Close
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Open
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-gray-400">{topic.description}</p>
                </div>

                {/* Expanded Content */}
                {expandedTopics.includes(topic.id) && (
                  <div className="p-6 border-t border-gray-700/50 space-y-6 animate-fadeIn">
                    {/* Text Content */}
                    {topic.content.text && (
                      <div className="text-gray-300">{topic.content.text}</div>
                    )}

                    {/* Code Block */}
                    {topic.content.code && (
                      <div className="relative">
                        <div className="absolute right-2 top-2">
                          <button
                            onClick={() =>
                              copyToClipboard(topic.content.code, topic.id)
                            }
                            className="px-3 py-1 text-sm bg-blue-500/20 hover:bg-blue-500/30 
                                   text-blue-300 rounded-md transition-colors duration-200
                                   min-w-[60px]"
                          >
                            {copiedId === topic.id ? "Copied!" : "Copy"}
                          </button>
                        </div>
                        <pre className="bg-gray-900/50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                          <code>{topic.content.code}</code>
                        </pre>
                      </div>
                    )}

                    {/* Video Embed */}
                    {topic.content.video && (
                      <div className="relative pt-[56.25%]">
                        <iframe
                          className="absolute inset-0 w-full h-full rounded-lg"
                          src={topic.content.video}
                          title="Video content"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheatVault;
