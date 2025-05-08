import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importovanie CSS

const Home = () => {
    const navigate = useNavigate(); // Hook na navigáciu

    const handleStartNow = () => {
        navigate('/pomodoro-app'); // Navigácia na pomodoro časovač
    };

    return (
        <div className="main-content">
            <div className="first-container">
                <h1 className="home-title">Welcome to pomodoroFlow</h1>
                <p className="p-first">
                    Boost your productivity and achieve more with our simple and effective Pomodoro app. Work with focus in short intervals, take regular breaks, and watch your efficiency soar.
                </p>
            </div>
            <div className="second-container">
                <h2>What is the Pomodoro Technique?</h2>
                <p className="p-second">
                    The Pomodoro Technique is a time management method designed to improve focus and productivity. Developed by Francesco Cirillo in the late 1980s, it involves breaking your work into short, focused intervals of typically <strong>25 minutes</strong>, known as "Pomodoros," followed by a <strong>5-minute break</strong>. After completing <strong>four intervals</strong>, you take a <strong>longer break</strong> to recharge. This structured approach helps reduce procrastination, prevent burnout, and make tasks feel more manageable.
                </p>
            </div>
                <div className="third-container">
                    <h2>How to use PomodoroFlow?</h2>
                    <p className="p-third">
                        <strong>1. Starting the Timer:</strong> On the main page, click the Start button to begin the work phase. The timer will start counting down the set time.<br />
                        <strong>2. Pausing and Resuming:</strong> You can pause the timer at any time by clicking Pause and resume it by clicking Start again.<br />
                        <strong>3. Switching Between Phases:</strong> After the work phase ends, a sound signal will play. Then, manually select the next phase — a short or long break — and start it.<br />
                        <strong>4. Settings:</strong> On the Settings page, you can customize the duration of each phase (work, short break, long break) and change the app’s color theme.<br />
                        <strong>5. Sound Effects:</strong> The app will notify you with a sound at the end of each phase. This sound is intended to motivate you to return to work or take a break.
                    </p>
                </div>
            <div className="fourth-container">
                <h3>Set your timer and take control of your time!</h3>
                <button className="home-button" onClick={handleStartNow}>Start Now</button>
            </div>
        </div>
    );
};

export default Home;