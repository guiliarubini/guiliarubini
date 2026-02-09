import { Project } from './types';
import newYorkerLogo from '../../assets/new_yorker_project_logo.jpeg';
import deneamJeansWoman1 from '../../assets/new_yorker_project/deneam_jeans_ss_24_woman_car.jpg';
import deneamJeansWoman2 from '../../assets/new_yorker_project/deneam_jeans_ss_24_woman_walk.jpg';
import denimJeansWideLeg from '../../assets/new_yorker_project/denim_jeans_wide_leg_with_leo_print.png';
import denimShorts from '../../assets/new_yorker_project/denim_shorts_ss_24.png';
import denimWideLegLaser from '../../assets/new_yorker_project/denim_wode_leg_with_laser_allover_print_ss_23.png';
import shinyPants from '../../assets/new_yorker_project/shiny_pants_ss_24.png';
import tailoringSet from '../../assets/new_yorker_project/tailoring_set_ss_24.png';

export const newYorkerProject: Project = {
  id: 'newyorker',
  title: '2022 - Present\nFashion Designer\nat New Yorker',
  description: 'Commercial fashion design projects for New Yorker brand',
  coverImage: newYorkerLogo,
  subcategories: [
    {
      name: 'Jeans',
      items: [
        {
          image: deneamJeansWoman1,
          description: 'Denim jeans SS 24 - woman with car',
        },
        {
          image: deneamJeansWoman2,
          description: 'Denim jeans SS 24 - woman walking',
        },
        {
          image: denimJeansWideLeg,
          description: 'Wide leg jeans with leopard print',
        },
        {
          image: denimWideLegLaser,
          description: 'Wide leg jeans with laser allover print SS 23',
        },
      ],
    },
    {
      name: 'Shorts',
      items: [
        {
          image: denimShorts,
          description: 'Denim shorts SS 24',
        },
      ],
    },
    {
      name: 'Sets',
      items: [
        {
          image: tailoringSet,
          description: 'Tailoring set SS 24',
        },
      ],
    },
    {
      name: 'Prints',
      items: [
        {
          image: shinyPants,
          description: 'Shiny pants SS 24',
        },
      ],
    },
  ],
};
