"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Code2,
  Lock,
} from "lucide-react";

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
        "Download YouTube videos and playlists completely FREE in HD or MP4 format",
      description: " step-by-step how to use yt-dlp and FFmpeg",
      content: {
        text: "two powerful, open-source tools — to download, merge, and save videos directly to your computer.",
        code: `@echo off
title yt-dlp Downloader
color 0a

:menu
cls
echo ================================================
echo            YT-DLP DOWNLOAD MENU
echo ================================================
echo 1. Download single video (best quality, MP4)
echo 2. Download audio only (MP3)
echo 3. Download entire playlist (best quality, MP4)
echo 4. Update yt-dlp to latest version
echo 5. Exit
echo ================================================
set /p choice=Choose an option (1-5): 

if "%choice%"=="1" goto single
if "%choice%"=="2" goto audio
if "%choice%"=="3" goto playlist
if "%choice%"=="4" goto update
if "%choice%"=="5" exit

:single
cls
set /p url=Enter video URL: 
yt-dlp -f "bv*+ba/b" --merge-output-format mp4 "%url%"
pause
goto menu

:audio
cls
set /p url=Enter video URL: 
yt-dlp -x --audio-format mp3 "%url%"
pause
goto menu

:playlist
cls
set /p url=Enter playlist URL: 
yt-dlp -f "bv*+ba/b" --merge-output-format mp4 -o "%%(playlist_index)s - %%(title)s.%%(ext)s" "%url%"
pause
goto menu

:update
cls
yt-dlp -U
pause
goto menu
`,
        video: "/videos/download-video-guide.mp4",
      },
    },
    {
      id: 3,
      title: "Create Your Own JARVIS AI Assistant - Full Tutorial (Batch File)",
      description:
        "🤖 Build your own JARVIS AI assistant using a simple batch file!",
      content: {
        text: "Control your PC with voice feedback and a custom menu system - just like Tony Stark's AI assistant.",
        code: `@echo off
title Jarvis Control Center
color 0a
cls
:: ============================
:: Jarvis Robot Logo
:: ============================
echo.
echo          .-"""-.
echo         /       \
echo        ^|  O   O  ^|
echo        ^|    ^>    ^|
echo        ^|  \___/  ^|
echo         \_______/
echo          ^|^|   ^|^|
echo         ^^^^^^^^^^
echo.
echo      JARVIS AI ASSISTANT
echo.
echo.
:: ============================
:: Welcome speech (safe)
:: ============================
powershell -Command "Try {Add-Type -AssemblyName System.Speech; $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; $speak.Speak('Heyy! Welcome to Jarvis, your personal assistant!')} Catch {Write-Host 'TTS not available.'}"
:: ============================
:: Short initialization animation
:: ============================
echo Initializing Jarvis...
for /l %%i in (1,1,5) do (
    set /p="█" <nul
    ping -n 2 127.0.0.1 >nul
)
echo Done!
pause
cls
:menu
cls
color 0a
echo ================= Jarvis Control Center =================
echo.
echo 1. Open Notepad
echo 2. Open Calculator
echo 3. Open Google Chrome
echo 4. Open Downloads Folder
echo 5. Open Documents Folder
echo 6. Open Desktop
echo 7. Task Manager
echo 8. Command Prompt
echo 9. Open YouTube
echo 10. Open File Explorer
echo 11. Shutdown PC
echo 12. Restart PC
echo 13. Exit
echo.
set /p choice=Choose an option [1-13]: 
:: ============================
:: Menu actions with safe TTS
:: ============================
if "%choice%"=="1" (
    call :SpeakAndRun "Opening Notepad" "notepad"
    goto menu
)
if "%choice%"=="2" (
    call :SpeakAndRun "Opening Calculator" "calc"
    goto menu
)
if "%choice%"=="3" (
    call :SpeakAndRun "Opening Google Chrome" "chrome.exe"
    goto menu
)
if "%choice%"=="4" (
    call :SpeakAndRun "Opening Downloads folder" "%USERPROFILE%\Downloads"
    goto menu
)
if "%choice%"=="5" (
    call :SpeakAndRun "Opening Documents folder" "%USERPROFILE%\Documents"
    goto menu
)
if "%choice%"=="6" (
    call :SpeakAndRun "Opening Desktop" "%USERPROFILE%\Desktop"
    goto menu
)
if "%choice%"=="7" (
    call :SpeakAndRun "Opening Task Manager" "taskmgr"
    goto menu
)
if "%choice%"=="8" (
    call :SpeakAndRun "Opening Command Prompt" "cmd"
    goto menu
)
if "%choice%"=="9" (
    call :SpeakAndRun "Opening YouTube" "https://www.youtube.com"
    goto menu
)
if "%choice%"=="10" (
    call :SpeakAndRun "Opening File Explorer" "explorer.exe"
    goto menu
)
if "%choice%"=="11" (
    powershell -Command "Try {Add-Type -AssemblyName System.Speech; $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; $speak.Speak('Shutting down PC in 10 seconds')} Catch{}"
    shutdown /s /t 10
    goto menu
)
if "%choice%"=="12" (
    powershell -Command "Try {Add-Type -AssemblyName System.Speech; $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; $speak.Speak('Restarting PC in 10 seconds')} Catch{}"
    shutdown /r /t 10
    goto menu
)
if "%choice%"=="13" (
    powershell -Command "Try {Add-Type -AssemblyName System.Speech; $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; $speak.Speak('Goodbye, have a nice day!')} Catch{}"
    exit
)
goto menu
:: ============================
:: Function: SpeakAndRun
:: ============================
:SpeakAndRun
set "msg=%~1"
set "cmd=%~2"
powershell -Command "Try {Add-Type -AssemblyName System.Speech; $speak = New-Object System.Speech.Synthesis.SpeechSynthesizer; $speak.Speak('%msg%')} Catch{}"
start "" %cmd%
goto :eof`,
        video: "https://www.youtube.com/embed/RB-YHc_15kM",
      },
    },
    {
      id: 4,
      title: "ULTRA HACKER TERMINAL - Batch File Tutorial (2025)",
      description: "FAKE HACKER TERMINAL ANIMATION",
      content: {
        text: "Build your own ultra-realistic hacker terminal simulation using just a batch file. Perfect for pranks or fun coding projects!",
        code: `@echo off
title HACKER TERMINAL // ACCESS NODE-01
color 0a
mode 110,30

:: =========================================
:: ASCII HACKER LOGO
:: =========================================
cls
echo.
echo             ███╗   ██╗ █████╗ ██████╗ ███████╗██████╗     
echo             ████╗  ██║██╔══██╗██╔══██╗██╔════╝██╔══██╗    
echo             ██╔██╗ ██║███████║██████╔╝█████╗  ██║  ██║    
echo             ██║╚██╗██║██╔══██║██╔══██╗██╔══╝  ██║  ██║    
echo             ██║ ╚████║██║  ██║██████╔╝███████╗██████╔╝    
echo             ╚═╝  ╚═══╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═════╝     
echo                     [ H A C K E R   A C C E S S ]          
echo.
timeout /t 2 >nul

:: =========================================
:: STARTUP LOADING BAR
:: =========================================
echo Initializing terminal...
call :bar
echo Loading modules...
call :bar
echo Establishing secure node link...
call :bar
cls

:: =========================================
:: SYSTEM SCAN
:: =========================================
echo Running system diagnostic scan...
ping -n 2 localhost >nul
echo [OK] Memory Status: Secure
ping -n 2 localhost >nul
echo [OK] Kernel Integrity: Verified
ping -n 2 localhost >nul
echo [OK] Firewall Layer: Weak
ping -n 2 localhost >nul
echo.
echo Attempting firewall breach...
call :bar
echo FIREWALL BREACHED SUCCESSFULLY.
echo.
timeout /t 2 >nul
cls

:: =========================================
:: PASSWORD CRACKING SIMULATION
:: =========================================
echo Attempting password decryption...
set "charset=ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
for /L %%i in (1,1,35) do (
    set "pw="
    for /L %%x in (1,1,12) do (
        set /a rnd=%random% %% 36
        for %%c in (!rnd!) do set "pw=!pw!!charset:~%%c,1!"
    )
    echo Decrypting: %%i/35  —  [!pw!]
    ping -n 1 localhost >nul
)
echo PASSWORD DECRYPTED: ACCESS GRANTED
timeout /t 2 >nul
cls

:: =========================================
:: MATRIX RAIN EFFECT
:: =========================================
:MATRIX
set /a rand=%random% %% 2
if %rand%==0 (
    call :line
) else (
    call :line2
)
goto MATRIX

:: =========================================
:: FUNCTIONS
:: =========================================
:bar
setlocal enabledelayedexpansion
set "bar="
for /L %%i in (1,1,30) do (
    set "bar=!bar!█"
    echo !bar!
    ping -n 1 localhost >nul
)
endlocal
exit /b

:line
setlocal enabledelayedexpansion
set "charset=ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
set "str="
for /L %%i in (1,1,50) do (
    set /a rnd=%random% %% 36
    set "str=!str!!charset:~%rnd%,1!"
)
echo !str!
endlocal
exit /b

:line2
setlocal enabledelayedexpansion
set "charset=abcdefghijklmnopqrstuvwxyz0123456789"
set "str="
for /L %%i in (1,1,50) do (
    set /a rnd=%random% %% 36
    set "str=!str!!charset:~%rnd%,1!"
)
echo !str!
endlocal
exit /b
`,
        video: "https://www.youtube.com/embed/Ga_zPe3O264",
      },
    },
    {
      id: 5,
      title: "Desktiop Auto Organizer - Batch File Tutorial (2025",
      description: "Automate Desktop Cleanup",
      content: {
        text: "Build a batch file that automatically organizes your desktop files into categorized folders like Images, Videos, Documents, and more with just a double-click.",
        code: `@echo off
title Desktop Auto Organizer
color 0A

echo ============================================
echo        DESKTOP AUTO ORGANIZER v2.0
echo ============================================
echo.
echo Cleaning and organizing your Desktop...
echo.

set "desk=%USERPROFILE%\Desktop"
cd "%desk%"

mkdir Images Videos Documents Music Programs Others >nul 2>&1

echo Sorting Images...
move *.jpg Images >nul 2>&1
move *.jpeg Images >nul 2>&1
move *.png Images >nul 2>&1
move *.gif Images >nul 2>&1
move *.bmp Images >nul 2>&1

echo Sorting Videos...
move *.mp4 Videos >nul 2>&1
move *.mov Videos >nul 2>&1
move *.avi Videos >nul 2>&1
move *.mkv Videos >nul 2>&1

echo Sorting Documents...
move *.pdf Documents >nul 2>&1
move *.docx Documents >nul 2>&1
move *.doc Documents >nul 2>&1
move *.txt Documents >nul 2>&1
move *.xlsx Documents >nul 2>&1

echo Sorting Music...
move *.mp3 Music >nul 2>&1
move *.wav Music >nul 2>&1
move *.aac Music >nul 2>&1

echo Sorting Programs...
move *.exe Programs >nul 2>&1
move *.msi Programs >nul 2>&1

echo Sorting Everything Else...
for %%f in (*.*) do (
    if not "%%~xf"=="" move "%%f" Others >nul 2>&1
)

echo.
echo ============================================
echo         ✔ Desktop is now clean!
echo ============================================
pause
`,
        video: "https://www.youtube.com/embed/iQ0v2G7QW_s",
      },
    },
  ];

  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const copyToClipboard = async (text, topicId, topicTitle) => {
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

  const stats = [
    { label: "Total Guides", value: `${topics.length}`, icon: Code2 },
    { label: "Categories", value: "8+", icon: Sparkles },
    { label: "Users Helped", value: "1K+", icon: Lock },
  ];

  return (
    <div className="min-h-screen text-white py-12 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur border border-purple-500/30 rounded-full">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Knowledge Base</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              CheatVault
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your ultimate collection of tech guides, tricks, and solutions
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Welcome to my collection of code snippets, tips, and resources from
            my YouTube tutorials. Find helpful code examples and development
            tricks mentioned in my videos, all in one place.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="relative max-w-xl mx-auto group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-xl opacity-20 group-hover:opacity-30 blur-lg transition-all duration-300" />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Search className="h-5 w-5 text-purple-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-4 border border-purple-500/30 rounded-xl 
                         bg-gray-800/50 backdrop-blur-sm focus:ring-2 focus:ring-purple-500 
                         focus:border-purple-500/50 transition-all duration-200 ease-in-out
                         placeholder:text-gray-400 text-white shadow-lg shadow-purple-500/10"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        {filteredTopics.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto border border-purple-500/20 shadow-lg shadow-purple-500/10">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                No topics found
              </h3>
              <p className="text-gray-400">
                No topics match your search "{searchQuery}". Try different
                keywords or check your spelling.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {filteredTopics.map((topic) => (
              <div key={topic.id} className="relative group h-fit">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

                <div
                  className="relative bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden 
                             transition-all duration-300 ease-in-out hover:shadow-lg
                             hover:shadow-purple-500/20 border border-purple-500/20 hover:border-purple-500/40"
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
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                        {topic.title}
                      </h3>
                      <button className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200 min-w-fit ml-2">
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
                    <div className="p-6 border-t border-purple-500/20 space-y-6">
                      {/* Text Content */}
                      {topic.content.text && (
                        <div className="text-gray-300 bg-purple-500/5 p-4 rounded-lg border border-purple-500/10">
                          {topic.content.text}
                        </div>
                      )}

                      {/* Code Block */}
                      {topic.content.code && (
                        <div className="relative">
                          <div className="absolute right-4 top-2 z-10">
                            <button
                              onClick={() =>
                                copyToClipboard(
                                  topic.content.code,
                                  topic.id,
                                  topic.title
                                )
                              }
                              className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500
                                     text-white rounded-lg transition-all duration-200 shadow-lg shadow-purple-500/30
                                     min-w-[70px] font-medium"
                            >
                              {copiedId === topic.id ? "Copied!" : "Copy"}
                            </button>
                          </div>
                          <div className="relative bg-gray-900/70 backdrop-blur border border-purple-500/20 rounded-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
                            <pre className="relative p-4 font-mono text-sm overflow-x-auto overflow-y-auto max-h-44">
                              <code className="text-gray-300">
                                {topic.content.code}
                              </code>
                            </pre>
                          </div>
                        </div>
                      )}

                      {/* Video Embed */}
                      {topic.content.video && (
                        <div className="relative pt-[56.25%] rounded-lg overflow-hidden border border-purple-500/20">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
                          <iframe
                            className="absolute inset-0 w-full h-full"
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheatVault;
