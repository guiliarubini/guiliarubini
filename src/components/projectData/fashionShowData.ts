import { Project } from './types';
import filterMoodboard from '../../assets/fashion_show/FILTER0627_ Moodboard.png';
import filterFinalDrawings from '../../assets/fashion_show/FILTER0627_Final drawings.png';
import filterInspoCollages from '../../assets/fashion_show/FILTER0627_Inspo collages.png';
import tizianoGuardini from '../../assets/fashion_show/special_project_with_tiziano_guardini.png';
import sustainableVision from '../../assets/fashion_show/sustainable_vision_fashion_show_2019.png';

export const fashionShowProject: Project = {
  id: 'fashionshow',
  title: 'Fashion Show\nIn Collaboration with Tiziano Guardini',
  description: 'Runway and fashion show collections',
  coverImage: sustainableVision,
  subcategories: [
    {
      name: 'FILTER 0627',
      items: [
        {
          image: filterMoodboard,
          description: 'FILTER 0627 - Moodboard',
        },
        {
          image: filterFinalDrawings,
          description: 'FILTER 0627 - Final drawings',
        },
        {
          image: filterInspoCollages,
          description: 'FILTER 0627 - Inspiration collages',
        },
      ],
    },
    {
      name: 'Special Projects',
      items: [
        {
          image: tizianoGuardini,
          description: 'Special project collaboration with Tiziano Guardini',
        },
      ],
    },
    {
      name: 'Fashion Shows',
      items: [
        {
          image: sustainableVision,
          description: 'Sustainable Vision Fashion Show 2019',
        },
      ],
    },
  ],
};
