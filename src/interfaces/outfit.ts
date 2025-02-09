import type Item from './item';

export default interface Outfit {
  id: string;
  name: string;
  category: string;
  items: Item[];
}
