class NavigationController {
  private currentPage: number;
  private prevPage: number;

  constructor() {
    this.prevPage = 0;
    this.currentPage = 0;
  }

  public scroll(target: number): {cp: number, pp: number} {
    this.prevPage = this.currentPage;
    this.currentPage = target;

    return { cp: this.currentPage, pp: this.prevPage }
  }
}

export const Navigation = new NavigationController();