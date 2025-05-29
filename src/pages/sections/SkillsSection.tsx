import React from 'react';
import { FaDatabase, FaCode, FaCloud, FaTools, FaServer } from 'react-icons/fa';

const SkillsSection = () => {
  const skills = [
    {
      title: 'Programming Languages',
      items: ['Python', 'Bash', 'SQL'],
      color: '#007bff', // Blue
      icon: <FaCode />,
    },
    {
      title: 'Databases',
      items: ['Kafka', 'MySQL', 'PostgreSQL', 'Hive', 'Impala', 'Neo4j', 'Redis'],
      color: '#ff5722', // Orange
      icon: <FaDatabase />,
    },
    {
      title: 'Big Data Tools',
      items: ['Hadoop', 'HDFS', 'YARN', 'PySpark', 'Spark Streaming', 'Delta Lake', 'Qlik CDC'],
      color: '#ffc107', // Yellow
      icon: <FaServer />,
    },
    {
      title: 'Cloud Platforms',
      items: [
        'Azure Synapse Analytics',
        'Azure Event Hub',
        'Azure Data Factory',
        'Azure Databricks',
        'Google BigQuery',
        'Snowflake',
      ],
      color: '#9c27b0', // Purple
      icon: <FaCloud />,
    },
    {
      title: 'DevOps & CI/CD Tools',
      items: ['Airflow', 'Jenkins', 'GitLab CI/CD', 'Docker', 'Kubernetes', 'Prometheus', 'Nginx'],
      color: '#4caf50', // Green
      icon: <FaTools />,
    },
  ];

  return (
    <div className="text-center py-10 px-5">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-5 text-center transition-transform duration-300 ease-in-out border-b-4 hover:-translate-y-1 hover:shadow-lg m-2 flex-shrink-0`}
            style={{
              borderBottomColor: skill.color,
              width: '300px', // Fixed width
            }}
          >
            <div
              className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center"
              style={{
                backgroundColor: skill.color,
                clipPath:
                  'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              <div className="text-white text-4xl">{skill.icon}</div>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-800">{skill.title}</h3>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-800 px-2 py-1 text-sm rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer transition-colors duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
