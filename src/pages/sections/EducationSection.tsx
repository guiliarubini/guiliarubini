import React from 'react';

const EducationSection = () => (
  <div className="px-5">
    <h2 className="text-3xl font-bold mb-4">Education</h2>
    <ul className="list-none space-y-4">
      <li className="border-b pb-2">
        <h3 className="text-xl font-semibold">Master’s Degree</h3>
        <p className="italic text-gray-600">Technische Universität Ilmenau, Germany</p>
        <p className="text-sm text-gray-500">03/2020 - 03/2023</p>
      </li>
      <li className="border-b pb-2">
        <h3 className="text-xl font-semibold">Bachelor’s Degree</h3>
        <p className="italic text-gray-600">KNITU-KAI, Russia</p>
        <p className="text-sm text-gray-500">03/2016 - 03/2020</p>
      </li>
    </ul>
  </div>
);

export default EducationSection;
