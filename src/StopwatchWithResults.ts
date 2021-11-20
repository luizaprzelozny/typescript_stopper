import Stopwatch from './Stopwatch.js'

class StopwatchWithResults extends Stopwatch {
  
  results: string[] = [];
  readonly noResultsInfo = 'No results :(';

  constructor(element: HTMLDivElement) {
    super(element);
    this.prepareElements(element);
    this.prepareActions();
  }

  prepareElements(element: HTMLDivElement): void {
    this.dom.resultsList = <HTMLElement> element.querySelector('.stopwatch__results');
    this.dom.addToListBtn = <HTMLButtonElement> element.querySelector('.stopwatch__add-to-list-btn');
    this.dom.resetListBtn = <HTMLButtonElement> element.querySelector('.stopwatch__reset-list-btn');
    this.dom.ulList = <HTMLUListElement> element.getElementsByTagName('ul')[0];
    this.dom.li = <HTMLLIElement> element.getElementsByTagName('li')[0];
  }

  prepareActions(): void {
    this.dom.addToListBtn.addEventListener('click', () => this.addToList());
    this.dom.resetListBtn.addEventListener('click', () => this.resetList());
  }

  private renderList(): void {
    const li: HTMLElement = document.createElement('li');
    this.dom.li.innerHTML = '';
  
    this.results.forEach(time => {
      li.innerHTML = time;
    })
    this.dom.ulList.appendChild(li);
  }

  public addToList(): void {
   const formattedTime: string = this.formatTime(this.currentTime);
   this.results.push(formattedTime);
   this.renderList();
  }

  public resetList(): void {
   this.results = [];
   this.dom.ulList.innerHTML = '';

   const li: HTMLElement = document.createElement('li');
   li.innerHTML = this.noResultsInfo;
   this.dom.ulList.appendChild(li);
  }

}

export default StopwatchWithResults

