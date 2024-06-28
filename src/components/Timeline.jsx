import React from "react";
let index=0;

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
      <div
          className={`timelineItem ${(index++) % 2 === 0 ? "leftTimeline" : "rightTimeline"
            }`}
        >
          <div>
            <h2>Masters in Computer Application</h2>
            <h4>Graphic Era Hill University ,  Bhimtal</h4>
            <p>July 2022 - till now</p>
            <p> Sgpa: 8.85 </p>
            <p> </p>
          </div>
        </div>






        <div
          className={`timelineItem ${(index++) % 2 === 0 ? "leftTimeline" : "rightTimeline"
            }`}
        >
          <div>
            <h2>Bachelor in Computer Application</h2>
            <h4>Kumaoun University , Nainital</h4>
            <p>July 2019 - June 2022</p>
            <p>Percentage: 70.03</p>
          </div>
        </div>



        <div
          className={`timelineItem ${(index++) % 2 === 0 ? "leftTimeline" : "rightTimeline"
            }`}
        >
          <div>
            <h2>Senior Secondary Education</h2>
            <h4>NNDM Beershiva School, Ranikhet</h4>
            <p>April 2018 - April 2019</p>
            <h3>Science(PCM)</h3>
            <p>Percentage: 79.13%</p>
          </div>
        </div>
        <div
          className={`timelineItem ${(index++) % 2 === 0 ? "leftTimeline" : "rightTimeline"
            }`}
        >
          <div>
            <h2>Secondary Education</h2>
            <h4>NNDM Beershiva School, Ranikhet</h4>
            <p>March 2016- April 2017</p>
            <p>Science, Maths, S. Science, Hindi, English, physical Education</p>
            <p>CGPA: 9.4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// const TimelineItem = ({ heading, text, index }) => (
//   <div
//     className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"
//       }`}
//   >
//     <div>
//       <h2>{heading}</h2>
//       <p>{text}</p>
//     </div>
//   </div>
// );

export default Timeline;
