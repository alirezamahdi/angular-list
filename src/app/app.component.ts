import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('angular2', 'http://angular.io', 3),
      new Article('hassan', 'http://hassan1397@yahoo.com', 2),
      new Article('hossein', 'http://hossein.mashmadgholi@yahoo.com', 1)
    ];
  }
  addArticle(title: HTMLInputElement, link:HTMLInputElement): boolean {
    console.log(`adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
