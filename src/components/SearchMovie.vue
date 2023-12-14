<template>
  <p>Movie Search</p>
  <input @input="searchByTitle()" v-model="search" placeholder="Search by title"/>
  <!-- <input v-model="search" placeholder="Search by title"> -->
  <button @click="resetInput()">x</button>
  <p></p>
  <p>
    <a-spin :spinning="isLoading" size="large"></a-spin>
  </p>
  <div v-if="search !== '' && film.title !== ''">
    <div class="description" >
      <div>
        <img class="img-detail" :src="baseUrl + film.img" alt="" width="100px" height="100px">
      </div>
      <div class="info-description">
        <p><b>Title:</b> {{ film.title }}</p>
        <p><b>Release Date:</b> {{ film.year }}</p>
        <p><b>Vote average:</b> {{ film.imdbRating }}</p>
        <p class="in-short"><b>In Short:</b> {{ film.plot }}</p>
        <p class="trailer" v-show="responseTrailer">
          <b>Trailer: </b>
          <a :href="responseTrailer">See on Youtube </a>
        </p>
      </div>

    </div>
    <div v-show="responseTrailer">
      <div v-if="innerWidth > mobileinnerWidth">
      <iframe width="500" height="315" :src="responseTrailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
  <div v-else-if="error === 'Movie not found!'">
    <p>{{ error }}</p>
  </div>
  <div v-if="search === '' && response.length !== 0">
    <p class="yearTitle">YEAR: {{ randomyear }}</p>
    <input type="number" @input="fetchRandom(1)" v-model="randomyear" min="1980" max="2025">
    <div class="random-poster" >
      <div v-for="(item, index) in random" v-bind:key="index">
        <li @click="detail(item.title, item.id)">
          <img class="img-random" :src="baseUrl + item.poster_path" alt="item.title">
          <p class="text-overflow-ellipses">{{ item.title }}</p>
        </li>
      </div>
    </div>
    <a-spin :spinning="isLoading" size="large" ></a-spin>
    <div>
      <button @click="nextPage">SHOW MORE</button>
      <p></p>
      <HelloWorld/>
      <StudyComp :title="film.title"/>
      <p>Page: {{ page }}</p>
    </div>
  </div>
</template>
 
<script lang="ts">
import axios from 'axios';
import debounce from 'lodash-es/debounce';

import LoadingOutlined from '@ant-design/icons-vue';
import { defineComponent, h } from 'vue';
// import StudyComp from './StudyComp.vue'

interface FilmINT {
  title     : string
  year      : string
  director  : string
  img       : string
  genre     : string
  imdbRating: string
  plot      : string
  id        : number
}
 
let film:FilmINT = {
  title     : '',
  year      : '',
  director  : '',
  img       : '',
  genre     : '',
  imdbRating: '',
  plot      : '',
  id        : 0
}
 
interface RandomImageINT {
  file_path  : string,
  poster_path: string,
  title      : string
  key        : string,
  id         : number
}

interface SearchMovieINT {
  film            : FilmINT
  error           : string
  search          : string
  response        : any
  random          : Array<RandomImageINT>
  baseUrl         : string
  randomyear      : number
  page            : number
  isLoading       : boolean
  responseTrailer : string,
  innerWidth      : number,
  mobileinnerWidth: number
}
 
let data:SearchMovieINT = {
  film,
  error           : '',
  search          : '',
  response        : {},
  random          : [],
  baseUrl         : 'https://image.tmdb.org/t/p/original/',
  randomyear      : 2023,
  page            : 1,
  isLoading       : false,
  responseTrailer : '',
  innerWidth      : 0,
  mobileinnerWidth: 600
}
 
export default defineComponent({
    name: 'SearchMovie',
    // components: { StudyComp },
    setup() {
        const indicator = h(LoadingOutlined, {
            style: {
                fontSize: '24px',
            },
            spin: true,
        });
        return {
            indicator,
        };
    },
    data() {
        return data;
    },
    async mounted() {
        this.isLoading = true;
    },
    created () {
      this.fetchRandom();
      this.innerWidth = window.innerWidth
      console.log('innerWidth', innerWidth)
      console.log('mobileinnerWidth', this.mobileinnerWidth)

    },
    methods: {
        searchByTitle: debounce(function (this: any, title = '') {
            
            this.isLoading = true;
            if (title !== '') {
                this.search = title;
            }
            // OLD SEARCH 
            //search by title
            // this.response = axios.get(`http://www.omdbapi.com/?t=${this.search}&apikey=${process.env.VUE_APP_OMDB_API_KEY}`)
            //     .then(resp => {
            //     this.response = resp.data;
            //     this.film.title = resp.data.Title;
            //     this.film.year = resp.data.Year;
            //     this.film.director = resp.data.Director;
            //     this.film.genre = resp.data.Genre;
            //     this.film.imdbRating = resp.data.imdbRating;
            //     this.film.plot = resp.data.Plot;
            //     this.film.img = resp.data.Poster;
            //     this.error = resp.data.Error;
            //     console.log(resp);
            //   }).finally(() => {
            //     this.isLoading = false;
            // });

            //search for id
            let config = {
               headers: {
                   'Authorization': 'Bearer ' + process.env.VUE_APP_TMDB_API_TOKEN
               }
           };
           
           this.response = axios.get(`https://api.themoviedb.org/3/search/movie?query=${this.search}&include_adult=false&language=en-US&page=1`, config)
               .then(resp => {
                 // this.film.id = resp?.data?.results[0]?.id ? resp?.data?.results[0]?.id : 0
                 this.film.img = resp?.data?.results[0]?.poster_path
                 this.film.id = resp?.data?.results[0]?.id
                 this.film.title = resp.data.results[0].title
                 this.film.year = resp.data.results[0].release_date
                 this.film.plot = resp.data.results[0].overview
                //  this.film.imdbRating = resp.data.results[0].vote_average
                // NEW LIKE 6.7
                 this.film.imdbRating = Math.trunc(resp.data.results[0].vote_average * 10) / 10
                 
                  this.fetchTrailer();
  
               
             })
          }, 800),
          detail(title: string, id: number) {
            this.searchByTitle(title);
            this.film.id = id;
            this.fetchTrailer();
        },
        async fetchTrailer() {
            this.isLoading = true;
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + process.env.VUE_APP_TMDB_API_TOKEN
                }
            };
            if (this.film.id !== undefined){
            await axios.get(`https://api.themoviedb.org/3/movie/${this.film.id}/videos?language=it-IT`, config)
                .then(resp => {
                const [first = {}] = resp.data?.results || [];
                // if ('key' in first) {
                //   this.responseTrailer = 'https://www.youtube.com/embed/' + first.key +'?autoplay=1'
                // } else {
                //   this.responseTrailer = ''
                // }
                // this.responseTrailer = 'key' in first ? `https://www.youtube.com/embed/${first.key}?autoplay=1&amp;controls=0` : '' // OK FOR NO-CONTROL PLAY PAUSE
                this.responseTrailer = 'key' in first ? `https://www.youtube.com/embed/${first.key}?autoplay=1&enablejsapi=1` : '';
                console.log('this.responseTrailer', this.responseTrailer)

            })
                .finally(() => {
                this.isLoading = false;
            });
          }
        },
        resetInput() {
          this.error = ''
          this.responseTrailer = ''
          this.film.id = 0
            this.search = '';
            this.film.title = '';
            this.film.year = '';
            this.film.director = '';
            this.film.genre = '';
            this.film.imdbRating = '';
            this.film.plot = '';
            this.film.img = '';
        },
        async fetchRandom(page = 1) {
            this.isLoading = true;
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + process.env.VUE_APP_TMDB_API_TOKEN
                }
            };
            await axios.get(`https://api.themoviedb.org/3/discover/movie?year=${this.randomyear}&page=${page}`, config)
                .then(resp => {
                if (page > 1) {
                    this.random = this.random.concat(resp.data.results);
                }
                else {
                    this.random = resp.data.results;
                }
                this.page = page;
            })
                .finally(() => {
                this.isLoading = false;
            });
        },
        nextPage() {
            this.page = this.page + 1;
            this.fetchRandom(this.page);
            return this.page;
        },
        resetPage() {
            this.page = 1;
        },
        setup() {
            const indicator = h(LoadingOutlined, {
                style: {
                    fontSize: '24px',
                },
                spin: true,
            });
            return {
                indicator,
            };
        }
    }
});
</script>
 
<style scoped>
.trailer {
  padding-top: 6%;
}

.info-description {
  padding-right: 5%
}

.text-overflow-ellipses {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 274px;    
}

h3 {
  margin: 20px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.in-short {
  width: 200px;
  display: inline-block;
  margin:0;
}

.random-poster {
  display: flex;
  flex-wrap: wrap;
  padding-top: 2%;
  padding-left: 9%;
}

img {
  width: 200px;
  height: 300px;
}

/* On screens that are 600px or less*/
@media screen and (max-width: 600px) {
  .img-detail {
    width: 100%;
    height: 100%;
    padding-right: 10%;
  }
  .img-random {
    width: 50%;
    height: 50%;
    padding-right: 10%;
  }
  p {
    font-size: 20px;
    overflow: unset !important;
  }
}

.yearTitle {
  padding-top: 1%;
  font-size:20px;
}

.description {
  display: flex; 
  gap: 3%;
  justify-content: center; 
}
@media screen and (max-width: 600px) {
  .description {
   display: block ;
   gap: 3%;
   padding-left: 10%;
  }
}
</style>