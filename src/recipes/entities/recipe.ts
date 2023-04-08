import { randomUUID } from 'node:crypto';

type data = {
  id?: string;
  title: string;
  description?: string;
  ingredients: string[];
  steps: string[];
  totalTime: number;
  servings: number;
  author: string;
  source?: string;
  tags: string[];
  image?: string;
};

export class Recipe {
  private _id: string;
  private _title: string;
  private _description?: string;
  private _ingredients: string[];
  private _steps: string[];
  private _totalTime: number;
  private _servings: number;
  private _author: string;
  private _source?: string;
  private _tags: string[];
  private _image?: string;

  constructor(data: data) {
    this._id = data.id ?? randomUUID();
    this._title = data.title;
    this._ingredients = data.ingredients;
    this._steps = data.steps;
    this._totalTime = data.totalTime;
    this._servings = data.servings;
    this._author = data.author;
    this._tags = data.tags;
    this._description = data.description;
    this._source = data.source;
    this._image = data.image;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get description(): string | undefined {
    return this._description;
  }

  set description(description: string | undefined) {
    this._description = description;
  }

  get ingredients(): string[] {
    return this._ingredients;
  }

  set ingredients(ingredients: string[]) {
    this._ingredients = ingredients;
  }

  get steps(): string[] {
    return this._steps;
  }

  set steps(steps: string[]) {
    this._steps = steps;
  }

  get totalTime(): number {
    return this._totalTime;
  }

  set totalTime(totalTime: number) {
    this._totalTime = totalTime;
  }

  get servings(): number {
    return this._servings;
  }

  set servings(servings: number) {
    this._servings = servings;
  }

  get author(): string {
    return this._author;
  }

  set author(author: string) {
    this._author = author;
  }

  get source(): string | undefined {
    return this._source;
  }

  set source(source: string | undefined) {
    this._source = source;
  }

  get tags(): string[] {
    return this._tags;
  }

  set tags(tags: string[]) {
    this._tags = tags;
  }

  get image(): string | undefined {
    return this._image;
  }

  set image(image: string | undefined) {
    this._image = image;
  }
}
