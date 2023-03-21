export class XKCDFetcher {
  comicImage: string;
  comicTitle: string;
  comicAlt: string;
  comicDate: string;
  
  constructor() {
    this.comicImage = "";
    this.comicTitle = "";
    this.comicAlt = "";
    this.comicDate = "";
  }
  
  fetchComic() {
    return fetch("https://fwd.innopolis.app/api/hw2?email=y.kim@innopolis.university")
      .then(response1 => response1.json())
      .then(data1 => {
        return fetch(`https://getxkcd.vercel.app/api/comic?num=${data1}`)
          .then(response2 => response2.json())
          .then(data2 => {
            this.comicImage = data2.img;
            this.comicTitle = data2.title;
            this.comicAlt = data2.alt;
            this.comicDate = new Date(data2.year, data2.month - 1, data2.day).toLocaleDateString();
          })
          .catch(error => console.error("Failed to fetch comic data from API:", error));
      })
      .catch(error => console.error("Failed to fetch comic ID from API:", error));
  }
}