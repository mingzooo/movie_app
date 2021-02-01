import { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';


class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies: movies, isLoading: false })
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        <div>
          {isLoading
            ? <div class="loader">
              <span class="loader__text">Loading...</span>
            </div>
            : (
              <div class="movies">
                {
                  movies.map(movie => {
                    console.log(movie);
                    return (
                      <Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                      />
                    )
                  })
                }
              </div>
            )
          }
        </div>
      </section>
    )
  }

}

export default App;
