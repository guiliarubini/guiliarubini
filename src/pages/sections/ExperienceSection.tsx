import React from 'react';

const ExperienceSection = () => {
  // TODO: Add fashion design work experience
  const experiences = [
    {
      title: 'TODO: Job Title',
      company: 'New Yorker GmbH & Co.KG',
      location: 'Braunschweig, Germany',
      duration: '01/2023 - Present',
      details: [
        'Designed, enhanced, and maintained Data Lake infrastructure and removed data quality issues.',
        'Implemented and maintained Airflow DAGs for efficient data workflow orchestration.',
        'Analyzed requirements for the new CDC; maintained legacy processes and integrated new pipelines with Qlik Replicate and Compose.',
        'Documented technical processes for CDC, Data Lake, and other projects, including workflows and requirements.',
        'Created and optimized CI/CD pipelines via Jenkins, Ansible, and GitHub Actions.',
        'Collaborated with cross-functional teams in a dynamic business environment.',
        'Utilized Bash scripts to automate data transfer and streamline processes.',
      ],
      achievements: [
        'Improved data accessibility and quality in the Data Lake, resulting in time and cost savings for multiple departments.',
        'Streamlined the Rotation Call process by automating tasks with Bash scripts, reducing manual effort by 30%.',
        'Migrated from an outdated CDC tool to Qlik, enhancing reliability and maintainability of data pipelines.',
      ],
      color: '#007bff', // Blue
    },
    {
      title: 'Backend Developer (HiWi)',
      company: 'Technische Universität Ilmenau',
      location: 'Ilmenau, Germany',
      duration: '06/2022 - 12/2022',
      details: [
        'Created RESTful API services via Django for observing endangered bees in Germany.',
        'Set up Docker using docker-compose for controlling bees’ activity.',
        'Added PostGIS extension to work with German TK25 coordinates.',
        'Configured Nginx and Gunicorn settings in the project.',
        'Set up CI/CD with unit and integration tests with GitLab CI/CD.',
        'Enforced clean code guidelines.',
      ],
      achievements: [
        'Developed a backend application for monitoring endangered bees in Germany.',
      ],
      color: '#ff5722', // Orange
    },
    {
      title: 'Data Engineer',
      company: 'EPAM Systems Inc.',
      location: 'Kazan, Russia',
      duration: '12/2020 - 03/2022',
      details: [
        'Implemented ETL processes in an open-source tracking project using Azure Cloud, Azure Data Factory, Databricks, PySpark, and Python.',
        'Mentored students and juniors in Python; served as onboarding buddy, guiding new employees through processes and tools.',
      ],
      achievements: [
        'Expanded an open-source GitHub activity dashboard for major companies and an internal version to encourage employee engagement and contributions.',
      ],
      color: '#4caf50', // Green
    },
    {
      title: 'Backend Developer',
      company: 'Akvelon Inc.',
      location: 'Kazan, Russia',
      duration: '05/2019 - 10/2020',
      details: [
        'Implemented RESTful API services via Django, with CI/CD and Docker for an HR portal service that allows tracking of candidates’ hiring processes.',
        'Designed database architecture in PostgreSQL.',
      ],
      color: '#ffc107', // Yellow
    },
    {
      title: 'Data Scientist',
      company: 'Meanotek AI',
      location: 'Kazan, Russia',
      duration: '05/2018 - 03/2019',
      details: [
        'Assisted a client in converting medical paper documents into structured databases using LSTM neural networks and Python.',
      ],
      color: '#9c27b0', // Purple
    },
  ];

  return (
    <div className="py-5 px-5 text-center">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-10">
        {experiences.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-left transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg border-l-4"
            style={{ borderLeftColor: job.color }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-lg text-gray-600 italic">{job.company}</p>
              </div>
              <div className="mt-2 md:mt-0 text-left md:text-right">
                <p className="text-sm text-gray-500">{job.duration}</p>
                <p className="text-sm text-gray-500 italic">{job.location}</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {job.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            {job.achievements && (
              <>
                <h4 className="text-lg font-semibold mt-4 mb-2">Achievements</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
