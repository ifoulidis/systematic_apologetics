import Card from '@/components/Card.js';
import GenerateCard from './generate_card';

export default function Recommendations(articles) {
  const cardSet = []
  let x = 0;
  for (let i = 0; i < articles.length; i++) {
    let newCard = GenerateCard(articles[x])
    cardSet.push(newCard) 
    x++
  }
  return cardSet
}