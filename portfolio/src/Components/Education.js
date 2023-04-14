import React from "react";
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";


function Education() {

    return ( 
    <div className="education">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement className="vertical-timeline-element--education" 
            date="2015 - 2016"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}>
            
            <h3 className="vertical-timeline-element-title">
            Kendriya Vidyalaya, Angul
            </h3>
            <p> 10th Standard </p>

            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" 
            date="2017 - 2018"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}>
            
            <h3 className="vertical-timeline-element-title">
            D.A.V Public School, Angul
            </h3>
            <p> 12th Standard </p>

            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" 
            date="2018 - 2022"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}>
            
            <h3 className="vertical-timeline-element-title">
            Silicon Institute of Technology, BBSR
            </h3>
            <p> Bachelors of Technology </p>

            </VerticalTimelineElement>
        </VerticalTimeline>

    </div>

    );

}

export default Education;