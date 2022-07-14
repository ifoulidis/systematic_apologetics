import Card from './Card'
import Truth from '../public/truth-sm.jpg'
import Darwin from '../public/darwin-sm.jpg'
import IslamImage from '../public/islam_symbol-sm.jpg'
import EarthImage from '../public/Earth-sm.jpg'
import MatrixImage from '../public/matrix-sm.jpg'
import HourGlass from '../public/hourglass-sm.jpg'
import SpaceImage from '../public/Space1.jpg'

export default function GenerateCard(article){
  switch (article) {
    case 'The Existence of God': 
      return Card('./existence_of_god', 'The Existence of God', <p>A Very Quick Summary of the Main Arguments for and Against</p>, SpaceImage)
    case 'The Cosmological Argument': 
      return Card('./cosmological_argument', 'The Cosmological Argument', <p>Everything Impermanent Must Be Created &bull; Can God Answer the Problem of the First Cause?</p>, EarthImage)
    case 'Is Reality An Illusion?': 
      return Card('./reality_illusion', 'Is Reality An Illusion?', <p>The Matrix &bull; Simulation Theory &bull; Multiverse Theory</p>, MatrixImage)
    case 'Christianity': 
      return Card('#', 'Christianity', <p>Why Should I Believe That Christianity Is True?</p>, Tomb)
  }
}