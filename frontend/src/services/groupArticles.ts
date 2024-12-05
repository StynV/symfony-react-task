import GroupedArticles from '../models/GroupedArticles'
import { ArticlesEntity } from '../models/MockData'

export const groupArticles = (articles: ArticlesEntity[]): GroupedArticles => {
  const grouped: GroupedArticles = {}

  // First, group articles based on their parent
  articles.forEach((article) => {
    if (article.parent) {
      if (!grouped[article.parent]) {
        grouped[article.parent] = []
      }
      grouped[article.parent].push(article)
    }
  })

  return grouped
}
