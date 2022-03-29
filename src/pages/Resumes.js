import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TrackVisibility from "react-on-screen";
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from "../components/Smalltitle";

function Resumes() {
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);
  const [certificationExperience, setCertificationExperience] = useState([]);
  const [honorExperience, setHonorExperience] = useState([]);

  useEffect(() => {
    axios.get("/api/skills").then((response) => {
      setSkills(response.data);
    });
    axios.get("/api/experience").then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
      setCertificationExperience(response.data.certificationExperience);
      setHonorExperience(response.data.honorExperience);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Hermilo Ortega - Resume</title>
        <meta name="description" content="Hermilo Ortega - Software Engineer bases on Vancouver BC - Resume"/>
      </Helmet>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="My Skills" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {skills.map((skill) => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.title} >
                  <Progress title={skill.title} percentage={skill.value} />
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Resume" />
          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map((workingExp) => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          
          <div className="mt-30 mi-padding-bottom"></div>
          
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map((educatonExp) => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div>
          
          <div className="mt-30 mi-padding-bottom"></div>
          
          <Smalltitle title="Honors & awards" icon="diploma" />
          <div className="mi-resume-wrapper">
            {honorExperience.map((honorExp) => (
              <Resume key={honorExp.id} resumeData={honorExp} />
            ))}
          </div>
          <div className="mt-30 mi-padding-bottom"></div>
          
          <Smalltitle title="Licenses & certifications" icon="diploma" />
          <div className="mi-resume-wrapper">
            {certificationExperience.map((certificationExp) => (
              <Resume key={certificationExp.id} resumeData={certificationExp} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;