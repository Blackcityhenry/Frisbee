var frisbee = new Vue(
  {
    el: '#app',
    vuetify: new Vuetify(),
    data: {
      home: {
        name: '',
        score: 0,
        last: '-'
      },
      away: {
        name: '',
        score: 0,
        last: '-'
      },
      pool: 0,
      scoreToWin: 0,
      won: false,
      winner: '',
      help: false
    },
    methods: {
      addPool(){
        this.pool += 1;
      },
      deductPool(){
        this.pool -= 1;
      },
      addToHome(){
        this.home.score += this.pool;
        this.home.last = this.pool;
        this.away.last = '-';
        this.pool = 0;
      },
      addToAway(){
        this.away.score += this.pool;
        this.away.last = this.pool;
        this.home.last = '-';
        this.pool = 0;
      },
      reset(){
        this.pool = 0;
        this.home.score = 0;
        this.away.score = 0;
        this.won = false;
        this.winner = '';
      }
    },
    watch:{
      'home.score'(home){
        if( this.scoreToWin == 0 ){

        } else if ( home >= this.scoreToWin ){
          this.winner = this.home.name || 'HOME';
          this.won = true;
        }
      },
      'away.score'(away){
        if( this.scoreToWin == 0 ){

        } else if ( away >= this.scoreToWin ){
          this.winner = this.away.name || 'AWAY';
          this.won = true;
        }
      }
    },
    mounted(){
      window.addEventListener('keyup', (event) => {
        if (event.keyCode === 38) {
          this.addPool();
        }
      })

      window.addEventListener('keyup', (event) => {
        if (event.keyCode === 40) {
          this.deductPool();
        }
      })

      window.addEventListener('keyup', (event) => {
        if (event.keyCode === 37) {
          this.addToHome();
        }
      })

      window.addEventListener('keyup', (event) => {
        if (event.keyCode === 39) {
          this.addToAway();
        }
      })
    }
  }
)
