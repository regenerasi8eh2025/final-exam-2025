import React, { useState } from 'react';
import Question from '@/app/components/Questions';
import Options from '@/app/components/Options';
import Score from '@/app/components/scores';
import Results from '@/app/components/results';
import '@/app/globals.css'

const Quiz = () => {
    const [questions] = useState([
        {
            question: "Termasuk kategori radio apakah Spark31 itu?",
            options: ["Radio komersial", "Radio komunitas", "Radia kondangan", "Radio pemerintah"],
            answer: "Radio komunitas",
        },
        {
            question: "Di mana radio Spark31 disiarkan?",
            options: ["UNPAD", "ITB", "UI", "IPDN"],
            answer: "ITB",
        },
        {
            question: "Ada berapa divisi operasional di Spark31?",
            options: ["2", "6", "1000", "9999999999"],
            answer: "6",
        },
        {
            question: "Siapa yang bertanggung jawab atas pengembangan website Spark31?",
            options: ["Divisi Technic", "Jelas Divisi Technic", "Divisi Technic yang paling kece sejagat raya", "Tidak tahu"],
            answer: "Divisi Technic yang paling kece sejagat raya",
        },
    ]);

    const [score, setScore] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAnswer = (option) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsCompleted(true);
        }

        setSelectedOption(null); 
    };

    return (
        <div className="quiz-wrapper">
            {isCompleted ? (
                <Results score={score} total={questions.length} />
            ) : (
                <div className="quiz-container">
                    <Question text={questions[currentQuestionIndex].question} />

                    <Options
                        options={questions[currentQuestionIndex].options}
                        selectedOption={selectedOption}
                        onSelect={handleAnswer}
                    />

                    <Score score={score} />

                    {selectedOption && (
                        <button className="nextbutton" onClick={handleNext}>
                            Next
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;