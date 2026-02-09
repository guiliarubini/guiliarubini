import { Project } from './types';
import denibleHead from '../../assets/special_fashion_collection/DENIBLE_head.png';
import denibleExample1 from '../../assets/special_fashion_collection/denible_example_1.png';
import denibleExample2 from '../../assets/special_fashion_collection/denible_example_2.png';
import denibleExample3 from '../../assets/special_fashion_collection/denible_example_3.png';

export const specialFashionCollectionProject: Project = {
  id: 'specialfashioncollection',
  title: 'DENIBLE\nGraduation Project',
  description: 'Unique and experimental fashion design projects',
  coverImage: denibleHead,
  subcategories: [
    {
      name: 'DENIBLE',
      items: [
        {
          image: denibleHead,
          description: 'DENIBLE - Main concept',
        },
        {
          image: denibleExample1,
          description: 'DENIBLE - Example 1',
        },
        {
          image: denibleExample2,
          description: 'DENIBLE - Example 2',
        },
        {
          image: denibleExample3,
          description: 'DENIBLE - Example 3',
        },
      ],
    },
  ],
};
