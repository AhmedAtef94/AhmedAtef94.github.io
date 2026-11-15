let idCount = 0;
//Experience factory function
const experienceGenerator = (date, title, company, details) => ({
  id: idCount++,
  date,
  title,
  company,
  details,
});
//Array of experience and education
export const experience = {
  work: [
    experienceGenerator(
      "Aug. 2024 - Present",
      "Project Manager",
      "Elkheta Educational Platform",
      [
        "- Led and coordinated an 18-member team, overseeing daily operations, task distribution, and project delivery.",
        "- Managed the delivery of 105 courses per academic term, including complete educational content, monthly reviews, examinations, and final revision materials.",
        "- Explored and developed initial automation tools, including OCR-based data extraction from images and PDFs, automated PowerPoint generation, image enhancement, and chart creation.",
        "- Evaluated technology-driven solutions to identify opportunities for improving content production workflows and operational efficiency.",
      ],
    ),
    experienceGenerator(
      "Nov. 2023 - Aug. 2024",
      "Data Entry Team Leader",
      "Elkheta Educational Platform",
      [
        "- Led a 15-member data entry team responsible for preparing and organizing educational data for teachers.",
      ],
    ),
    experienceGenerator(
      "Sep. 2019 - Dec. 2021",
      "Sales representative",
      "Nestlé Egypt",
    ),
    experienceGenerator(
      "Aug. 2016 - Aug. 2019",
      "Agent and financial planner",
      "Arope Insurance, BLOM Bank Group",
    ),
  ],
  education: [
    experienceGenerator(
      "Feb. 2024 - Mar. 2024",
      "Project Management Courses",
      "Online",
      ["Agile Project Management", "Scrum Fundamentals", "Jira Fundamentals"],
    ),
    experienceGenerator(
      "Apr. 2022 - Jul. 2022",
      "Front-End & Cross-Platform Mobile App Developer",
      "Information Technology Institute (ITI)",
    ),
    experienceGenerator(
      "Jan. 2022 - Apr. 2022",
      "Front-End Development Diploma (80 hours)",
      "Route Academy",
    ),
    experienceGenerator(
      "Sep. 2012 - Jul. 2016",
      "B.Sc. in Management Information Systems (MIS)",
      "Faculty Of Commerce, Alexandria University",
      [
        "Project Grade: Very Good",
        "Graduation Project: A social recommendation system for hangouts",
      ],
    ),
  ],
};
