import { ArticlesEntity } from './MockData'

// Key-value model
// key = parent, ArticlesEntity[] = children
export default interface GroupedArticles {
  [key: string]: ArticlesEntity[]
}
