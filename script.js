document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  
  // Define questions for each segment
  const questions = {
    segment1: [
        { question: 'How would you rate your company\'s revenue growth rate?', options: ['Negative growth', '0-5% growth', '5-10% growth', '10-20% growth', '>20% growth'] },
        { question: 'How would you rate your company\'s net profit margin?', options: ['<5%', '5-10%', '10-15%', '15-20%', '>20%'] },
        { question: 'How would you rate your company\'s gross profit margin?', options: ['<10%', '10-20%', '20-30%', '30-40%', '>40%'] },
        { question: 'How would you rate your company\'s cash flow?', options: ['Negative', 'Breakeven', 'Slightly positive', 'Positive', 'Very positive'] },
        { question: 'How would you rate your company\'s debt-to-equity ratio?', options: ['>2.5', '1.5-2.5', '1-1.5', '0.5-1', '<0.5'] },
        { question: 'How would you rate your company\'s ROI?', options: ['<5%', '5-10%', '10-15%', '15-20%', '>20%'] },
        { question: 'How would you rate your company\'s inventory turnover ratio?', options: ['<2 times/year', '2-4 times/year', '4-6 times/year', '6-8 times/year', '>8 times/year'] },
        { question: 'How would you rate your company\'s average collection period?', options: ['>90 days', '60-90 days', '45-60 days', '30-45 days', '<30 days'] },
        { question: 'How would you rate your company\'s asset utilization?', options: ['<50%', '50-65%', '65-75%', '75-85%', '>85%'] },
        { question: 'How would you rate your company\'s COGS as a % of sales?', options: ['>80%', '60-80%', '40-60%', '20-40%', '<20%'] },
        { question: 'How would you rate your company\'s market share?', options: ['Bottom 25%', '25-50%', '50-75%', 'Top 25%', 'Top 5%'] },
        { question: 'How would you rate your customer acquisition rate?', options: ['Decreasing significantly', 'Decreasing', 'Stable', 'Increasing', 'Increasing significantly'] },
        { question: 'How would you rate your customer retention rate?', options: ['<50%', '50-70%', '70-85%', '85-95%', '>95%'] },
        { question: 'How would you rate your company\'s competitive advantage?', options: ['No advantage', 'Weak advantage', 'Moderate advantage', 'Strong advantage', 'Very strong advantage'] },
        { question: 'How would you rate your company\'s brand recognition?', options: ['Very low', 'Low', 'Moderate', 'High', 'Very high'] },
        { question: 'How would you rate your company\'s R&D investment?', options: ['<1% of revenue', '1-3% of revenue', '3-5% of revenue', '5-7% of revenue', '>7% of revenue'] },
        { question: 'How would you rate your product/service innovation rate?', options: ['<5% annually', '5-8% annually', '8-10% annually', '10-12% annually', '>12% annually'] },
        { question: 'How would you rate your company\'s adaptability to market changes?', options: ['Very slow', 'Slow', 'Average', 'Fast', 'Very fast'] },
        { question: 'How would you rate your company\'s technology utilization?', options: ['Outdated', 'Below average', 'Average', 'Above average', 'Cutting-edge'] }
    ],
    segment2: [
        { question: 'How would you rate your ability to think strategically?', options: ['No vision', 'Limited vision', 'Some vision', 'Clear vision', 'Strong and innovative vision'] },
        { question: 'How would you rate your decision-making skills under pressure?', options: ['Indecisive', 'Often poor decisions', 'Sometimes good decisions', 'Usually good decisions', 'Consistently excellent decisions'] },
        { question: 'How would you rate your strategic planning skills?', options: ['No planning', 'Weak planning', 'Adequate planning', 'Good planning', 'Excellent planning'] },
        { question: 'How would you rate your crisis management skills?', options: ['Very poor', 'Poor', 'Average', 'Good', 'Excellent'] },
        { question: 'How would you rate your ability to build and lead effective teams?', options: ['High turnover, low morale', 'Moderate turnover, low morale', 'Some turnover, mixed morale', 'Low turnover, good morale', 'Very low turnover, high morale'] },
        { question: 'How would you rate your delegation skills?', options: ['Very poor', 'Poor', 'Adequate', 'Good', 'Excellent'] },
        { question: 'How would you rate your time management skills?', options: ['Very poor', 'Poor', 'Adequate', 'Good', 'Excellent'] },
        { question: 'How would you rate your financial management skills?', options: ['Poor financial control', 'Weak financial control', 'Adequate financial control', 'Strong financial control', 'Exceptional financial control'] },
        { question: 'How would you rate your clarity and conciseness in communication?', options: ['Often unclear', 'Sometimes unclear', 'Generally clear', 'Usually clear', 'Always clear and concise'] },
        { question: 'How would you rate your ability to persuade and influence others?', options: ['Rarely persuasive', 'Sometimes persuasive', 'Moderately persuasive', 'Usually persuasive', 'Highly persuasive'] },
        { question: 'How would you rate your active listening skills?', options: ['Very poor', 'Poor', 'Adequate', 'Good', 'Excellent'] },
        { question: 'How would you rate your public speaking skills?', options: ['Very poor', 'Poor', 'Adequate', 'Good', 'Excellent'] }
    ],
    segment3: [
        { question: 'How would you rate your commitment to honesty?', options: ['Frequently dishonest', 'Sometimes dishonest', 'Generally honest', 'Usually honest', 'Always honest and transparent'] },
        { question: 'How would you rate your transparency in business dealings?', options: ['Very low', 'Low', 'Moderate', 'High', 'Very high'] },
        { question: 'How would you rate your adherence to ethical conduct?', options: ['Frequently unethical', 'Sometimes unethical', 'Generally ethical', 'Usually ethical', 'Always ethical'] },
        { question: 'How would you rate your relationship with your family?', options: ['Very poor', 'Poor', 'Average', 'Strong', 'Very strong'] },
        { question: 'How would you rate your friendships?', options: ['Very poor', 'Poor', 'Average', 'Strong', 'Very strong'] },
        { question: 'How would you rate your engagement with the community?', options: ['Not engaged', 'Rarely engaged', 'Occasionally engaged', 'Regularly engaged', 'Highly engaged'] },
        { question: 'How would you rate your business networking skills?', options: ['Very poor', 'Poor', 'Adequate', 'Good', 'Excellent'] },
        { question: 'How would you rate your commitment to continuous learning?', options: ['No commitment', 'Low commitment', 'Moderate commitment', 'Strong commitment', 'Very strong commitment'] },
        { question: 'How would you rate your work-life balance?', options: ['Very poor', 'Poor', 'Average', 'Good', 'Very good'] },
        { question: 'How would you rate your stress management skills?', options: ['Very poor', 'Poor', 'Adequate', 'Good', 'Excellent'] },
        { question: 'How would you rate your physical and mental health?', options: ['Very poor', 'Poor', 'Average', 'Good', 'Excellent'] }
    ]
};


  // Assuming segments are defined based on the keys in the questions object
  const segments = Object.keys(questions);
  let currentSegmentIndex = 0;

  function renderQuestions() {
    console.log("Rendering questions...");
    Object.keys(questions).forEach((segmentId, index) => {
      const segmentQuestions = questions[segmentId];
      const container = document.getElementById(`questions${index + 1}`);

      console.log(`Rendering for segment ${segmentId} in container ${container ? "found" : "not found"}`);
      console.log(`Container found:`, container);
      console.log(`Segment Questions:`, segmentQuestions);

      if (container) {
        container.innerHTML = ""; // Clear previous content
        segmentQuestions.forEach((q, qIndex) => {
          const questionElement = document.createElement("div");
          questionElement.classList.add("question");
          questionElement.innerHTML = `
            <p><strong>Q${qIndex + 1}:</strong> ${q.question}</p>
            ${q.options.map((option, oIndex) => `<div class='somu'>
              <input type="radio" name="q${index}-${qIndex}" value="${oIndex + 1}" id="q${index}-${qIndex}-o${oIndex}">
              <label for="q${index}-${qIndex}-o${oIndex}">${option}</label><br></div>
            `).join("")}
          `;
          console.log(`Appending questionElement:`, questionElement);
          container.appendChild(questionElement);
        });
      } else {
        console.error(`Container with ID ${segmentId} not found`);
      }
    });

    // Ensure segment navigation visibility
    if (segments[currentSegmentIndex]) {
      document.getElementById(segments[currentSegmentIndex]).classList.remove("hidden");
      console.log(`Segment ${segments[currentSegmentIndex]} is visible`);
    } else {
      console.error(`Segment with index ${currentSegmentIndex} does not exist`);
    }

    updateNavigationButtons();
  }

  function updateNavigationButtons() {
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    if (prevButton) {
      prevButton.style.display = currentSegmentIndex === 0 ? "none" : "inline";
    } else {
      console.error("Previous button not found");
    }

    if (nextButton) {
      nextButton.textContent = currentSegmentIndex === segments.length - 1 ? "Finish" : "Next Segment";
    } else {
      console.error("Next button not found");
    }
  }

  function calculateSegmentScore(segmentId) {
    const segmentQuestions = questions[segmentId];
    let score = 0;

    segmentQuestions.forEach((q, qIndex) => {
      const selectedOption = document.querySelector(`input[name="q${segments.indexOf(segmentId)}-${qIndex}"]:checked`);
      if (selectedOption) {
        score += parseInt(selectedOption.value, 10);
      }
    });

    // Calculate the average score for the segment
    const averageScore = score / segmentQuestions.length;
    return averageScore;
  }

  function calculateFinalScore() {
    let totalScore = 0;

    segments.forEach((segmentId) => {
      const segmentScore = calculateSegmentScore(segmentId);
      totalScore += segmentScore;

      // Display segment score
      const scoreSummary = document.getElementById("score-summary");
      if (scoreSummary) {
        const segmentScoreElement = document.createElement("p");
        segmentScoreElement.textContent = `Segment ${segmentId} Score: ${segmentScore.toFixed(2)}`;
        scoreSummary.appendChild(segmentScoreElement);
      } else {
        console.error("Score summary element not found");
      }
    });

    // Calculate and display the overall average score
    const finalScore = totalScore / segments.length;

    const overallScoreElement = document.createElement("p");
    overallScoreElement.textContent = `Your overall average score is ${finalScore.toFixed(2)}`;
    document.getElementById("score-summary").appendChild(overallScoreElement);

    document.getElementById("results").classList.remove("hidden");
    document.getElementById("survey").classList.add("hidden");
    document.getElementById("navigation").classList.add("hidden");
    displayInterpretation(finalScore);

    emailsend(finalScore);
  }



  function displayInterpretation(score) {
    const scoreSummary = document.getElementById("score-summary");
    if (scoreSummary) {
      let interpretation = "";
      if (score <= 1.9) {
        interpretation = `
          <strong>0 to 1.9 (Very Poor):</strong>
          <ol>
            <li>Significant issues across multiple areas indicating critical weaknesses. The business entity shows pervasive problems in key operational, financial, and strategic areas, reflecting an inability to meet fundamental business standards.</li>
            <li>Lack of basic business fundamentals and strategic planning. The lack of a coherent strategy and poor business fundamentals are apparent, with critical gaps in planning, execution, and financial management.</li>
            <li>Urgent need for intervention and major restructuring. Immediate and extensive intervention is required to address the fundamental flaws and to stabilize the business. Major restructuring efforts are necessary to prevent further decline.</li>
          </ol>
        `;
      } else if (score <= 2.9) {
        interpretation = `
          <strong>2.0 to 2.9 (Poor):</strong>
          <ol>
            <li>Several areas of concern indicating underlying problems. While not as critical as the "Very Poor" grade, the business still faces significant challenges that need to be addressed to avoid further deterioration.</li>
            <li>Inconsistent performance and strategic execution. There are inconsistencies in performance, with some areas performing below expectations. Strategic initiatives may be poorly executed or lack coherence.</li>
            <li>Needs improvement and focus on addressing key deficiencies. The business must focus on identifying and addressing the key areas that are dragging down overall performance. Improvement plans should be implemented to remedy these deficiencies.</li>
          </ol>
        `;
      } else if (score <= 3.9) {
        interpretation = `
          <strong>3.0 to 3.9 (Average):</strong>
          <ol>
            <li>Performance is stable but lacks strong competitive edge. The business operates at a stable level but does not exhibit strong competitive advantages. Performance is satisfactory but not exceptional.</li>
            <li>Adequate business fundamentals but room for significant improvement. Basic business operations are functional, but there is significant potential for improvement in various areas to enhance overall effectiveness.</li>
            <li>Needs to leverage strengths and address weaknesses to enhance performance. The business should focus on leveraging its existing strengths and addressing weaknesses to move from average to above-average performance.</li>
          </ol>
        `;
      } else if (score <= 4.9) {
        interpretation = `
          <strong>4.0 to 4.9 (Good):</strong>
          <ol>
            <li>Strong performance across most areas with a few minor weaknesses. The business shows strong performance in most areas, though there may be a few minor weaknesses that can be improved.</li>
            <li>Good strategic planning and execution but room for further optimization. Strategic planning and execution are generally effective, but there is still potential for optimization and fine-tuning to reach higher levels of excellence.</li>
            <li>Competitive and well-positioned but can aim for excellence with minor adjustments. The business is competitive and well-positioned in its market. With minor adjustments and continuous improvement, it can achieve excellence.</li>
          </ol>
        `;
      } else if (score === 5) {
        interpretation = `
          <strong>5 (Excellent):</strong>
          <ol>
            <li>Outstanding performance and leadership across all assessed areas. The business excels in all evaluated parameters, demonstrating superior operational, financial, and strategic performance.</li>
            <li>Strong strategic execution, innovation, and competitive edge. Strategic initiatives are effectively executed, and the business continuously innovates to maintain a competitive edge.</li>
            <li>Well-positioned for sustained success and growth. The business is well-positioned for long-term success and growth, with strong leadership, robust processes, and a clear vision for the future.</li>
          </ol>
        `;
      }
  
      
       // Ensure the interpretation is appended, not overwriting
    const interpretationElement = document.createElement("p");
    interpretationElement.textContent = `Your final score is ${score.toFixed(2)}. ${interpretation}`;
    // scoreSummary.appendChild(interpretationElement);
    scoreSummary.innerHTML += `
  <p><strong>Your final score is ${score.toFixed(2)}.</strong></p>
  ${interpretation}
`;
  } 
   else {
    console.error("Score summary element not found");
    }
  }
  

  function updateNavigationButtons() {
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
  
    if (prevButton) {
      prevButton.style.display = currentSegmentIndex === 0 ? "none" : "inline";
    } else {
      console.error("Previous button not found");
    }
  
    if (nextButton) {
      nextButton.textContent = currentSegmentIndex === segments.length - 1 ? "Finish" : "Next Segment";
    } else {
      console.error("Next button not found");
    }
  }
  
  function showSegment(index) {
    const currentSegmentId = segments[currentSegmentIndex];
    const nextSegmentId = segments[index];
    
    if (currentSegmentId) {
      const currentSegment = document.getElementById(currentSegmentId);
      if (currentSegment) {
        currentSegment.classList.add("hidden");
      } else {
        console.error(`Segment with ID ${currentSegmentId} not found`);
      }
    }
  
    if (nextSegmentId) {
      const nextSegment = document.getElementById(nextSegmentId);
      if (nextSegment) {
        nextSegment.classList.remove("hidden");
        nextSegment.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the next segment
      } else {
        console.error(`Segment with ID ${nextSegmentId} not found`);
      }
    }
  }
  
  document.getElementById("next-btn").addEventListener("click", () => {
    if (currentSegmentIndex < segments.length - 1) {
      currentSegmentIndex++;
      showSegment(currentSegmentIndex);
      updateNavigationButtons();
    } else {
      calculateFinalScore();
    }
  });
  
  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentSegmentIndex > 0) {
      currentSegmentIndex--;
      showSegment(currentSegmentIndex);
      updateNavigationButtons();
    }
  });
  

  document.getElementById("check-score-btn").addEventListener("click", () => {
    const segmentScore = calculateSegmentScore(segments[currentSegmentIndex]);
    alert(`Segment ${currentSegmentIndex + 1} Score: ${segmentScore.toFixed(2)}`);
  });

  document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("get-started").classList.add("hidden");
    document.getElementById("survey").classList.remove("hidden"); // Directly show the survey page
  renderQuestions();
    
  });

  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("survey").classList.remove("hidden");
    renderQuestions();
  });
    document.getElementById("restart-btn").addEventListener("click", () => {
      window.location.reload();
    document.getElementById("results").classList.add("hidden");
    document.getElementById("get-started").classList.remove("hidden");
    document.getElementById("navigation").classList.remove("hidden");
  });
});

