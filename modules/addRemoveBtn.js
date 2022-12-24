export default class Collection {
  constructor(bList) {
    this.arr = bList;
  }

  UpdateStorage() {
    localStorage.setItem('booksList', JSON.stringify(this.arr));
  }

  addingBooks(bookName, author) {
    const bookObj = {
      id: new Date().getTime().toString(),
      book: bookName.value,
      author: author.value,
    };
    if (this.arr === null || this.arr.length === 0) {
      this.arr = [];
      this.arr.push(bookObj);
    } else {
      this.arr.push(bookObj);
    }
    this.UpdateStorage();
  }

  removeBooks(id) {
    this.arr = this.arr.filter((e) => e.id !== id);
    this.UpdateStorage();
  }
}