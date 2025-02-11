const Api_key = "0b378a0597d810f0568cefb2b7831a85";

export const fetchMovies = async (category, page) => {
  let url = `https://api.themoviedb.org/3/movie/${category}?api_key=${Api_key}&language=en-US&page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data?.success === false) {
      return {
        success: false,
        message: data.status_message,
      };
    } else {
      return {
        success: true,
        data: data,
      };
    }
  } catch (error) {
    return error;
  }
};

export const fetchCastDetails = async (movieId) => {
  let url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Api_key}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data?.success === false) {
      return {
        success: false,
        message: data.status_message,
      };
    } else {
      return {
        success: true,
        data: data.cast,
      };
    }
  } catch (error) {
    return error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Api_key}&language=en-US`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data?.success === false) {
      return {
        success: false,
        message: data.status_message,
      };
    } else {
      return {
        success: true,
        data: data,
      };
    }
  } catch (error) {
    return error;
  }
};

export const fetchSearchResults = async (searchTerm, page) => {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${searchTerm}&page=${page}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data?.success === false) {
      return {
        success: false,
        message: data.status_message,
      };
    } else {
      return {
        success: true,
        data: data,
      };
    }
  } catch (error) {
    return error;
  }
};
