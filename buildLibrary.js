class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    /* Review set isCheckedOut(value) and 
    toggleCheckOutStatus() for full explaination.
    */ 
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
    toggleCheckOutStatus() {
      this.isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator  + rating);
      return ratingsSum / this.ratings.length;
    }
    addRating(value) {
      this._ratings.push(value);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._title = title;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runtime() {
      return this._runtime;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short istory of Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  //BOOK INSTANCE
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.ratings)
  console.log(historyOfEverything.getAverageRating());
  
  //MOVIE INSTANCE
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  /*
  const test = new Media("It");
  test.toggleCheckOutStatus();
  console.log(test);
  console.log(test.title);
  */