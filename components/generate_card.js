import Card from './Card'
// Without the './' before the '../', I was getting an error during deployment. Seems weird, but it works!
import Truth from '../public/truth-sm.jpg'
import Darwin from '../public/darwin-sm.jpg'
import IslamImage from '../public/islam_symbol-sm.jpg'
import EarthImage from '../public/earth-sm.jpg'
import MatrixImage from '../public/matrix-sm.jpg'
import HourGlass from '../public/hourglass-sm.jpg'
import SpaceImage from '../public/red_space-sm.jpg'
import EmptyTomb from '../public/empty_tomb-sm.jpg'
import ThreeWiseMen from '../public/three_wise_men-sm.jpg'


export default function GenerateCard(article){
  switch (article) {
    case 'The Existence of God': 
      return Card('articles/existence_of_god', article, <p>A Very Quick Summary of the Main Arguments for and Against</p>, SpaceImage)
    case 'The Cosmological Argument': 
      return Card('articles/cosmological_argument', article, <p>Can God Answer the Problem of the First Cause?</p>, EarthImage)
    case 'Is Reality An Illusion?': 
      return Card('articles/reality_illusion', article, <p>The Matrix &bull; Simulation Theory &bull; Multiverse Theory</p>, MatrixImage)
    case 'Christianity': 
      return Card('/belief_systems/christianityHome', article, <p>Why Should I Believe That Christianity Is True?</p>, ThreeWiseMen)
    case 'What Is Truth?':
      return Card('articles/whatIsTruth', article, <p>Is Truth Relative? &bull; Can I Have My Own Truth?</p>, Truth)
    case 'Jesus: Moral Teacher or Deity?':
      return Card('articles/jesus_moral_teacher_or_deity', article, <p>Liar, Lunatic, or Lord?</p>, EmptyTomb)
    case 'Time vs. Naturalism':
      return Card('articles/time_vs_naturalism', article, <p>Can the Universe Have Always Existed?</p>, HourGlass)
    case 'Islam':
      return Card('belief_systems/islam', article, <p>Is Islam True?</p>, IslamImage)
    case 'Atheism':
      return Card('belief_systems/atheism', article, <p>Is Atheism True?</p>, Darwin)
  }
}