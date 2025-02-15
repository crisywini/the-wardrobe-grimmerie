import type Item from './item';

export default interface Outfit {
  id: string;
  name: string;
  category: string;
  items: Item[];
  default_image_url: string;
}
